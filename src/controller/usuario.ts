import { Request, Response } from "express";
import { prisma } from "../DAO/prismaConnect";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

type Usuario = {
    cpf: string,
    senha: string,
    id?: number,
    token?: string
}

export const inserir = async (req: Request, res: Response) => {

    const { cpf, senha } = req.body;

    const usuario = await prisma.usuario.create({
        data: {
            cpf: cpf,
            senha: senha
        }
    })

    if (usuario) return res.status(200).json({ usuario: usuario, message: "Inserido com sucesso!" }).end();

    return res.status(400).json({ error: "Usuário não cadastrado" }).end();

}

export const login = async (req: Request, res: Response) => {

    const { cpf, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({
        where: {
            cpf: cpf
        }
    })

    if (usuario) {
        //se a senha estiver correta
        if (usuario.senha === senha) {
            if (!process.env.JWT_PRIVATE_KEY) {
                return res.status(500).send('KEY não encontrada.').end();
            }
            const data: Usuario = {
                cpf: usuario.cpf,
                senha: usuario.senha,
                token: ''
            }
            jwt.sign(data, process.env.JWT_PRIVATE_KEY, { expiresIn: '60m' }, (err, token) => {
                //se nao der erro, adiciona o token ao objeto data 
                //e retorna o objeto data
                if (!err) {
                    data.token = token
                    return res.status(200).json(data).end();
                } else {
                    return res.status(404).json(err).end();
                }
            });
        }
        else return res.status(401).json({ error: "Senha incorreta" }).end();
    }

    //se nao encontrar nenhum usuario com o cpf informado
    else return res.status(401).json({ error: "Usuário não encontrado" }).end();

}

export const listar = async (req: Request, res: Response) => {
    const usuarios = await prisma.usuario.findMany();

    if (usuarios) return res.status(200).json({ usuarios: usuarios }).end();
    return res.status(401).json({ error: "Nenhum usuário encontrado" }).end();

}

export const buscar = async (req: Request, res: Response) => {
    const { cpf } = req.body;

    const usuario = await prisma.usuario.findUnique({
        where: {
            cpf: cpf
        }
    })

    if (usuario) return res.status(200).json({ usuario: usuario }).end();

    //se nao encontrar nenhum usuario com o cpf informado
    return res.status(401).json({ error: "Usuário não encontrado" }).end();
}

export const deletar = async (req: Request, res: Response) => {
    const { cpf } = req.body;

    const usuario = await prisma.usuario.delete({
        where: {
            cpf: cpf
        }
    })
    if (usuario) return res.status(200).json({ usuario: usuario }).end();

    //se nao encontrar nenhum usuario com o cpf informado
    return res.status(401).json({ error: "Usuário não encontrado" }).end();
}

export const atualizar = async (req: Request, res: Response) => {
    const { cpf, senha } = req.body;

    const usuario = await prisma.usuario.update({
        where: {
            cpf: cpf
        },
        data: {
            senha: senha
        }
    })
    if (usuario) return res.status(200).json({ usuario: usuario }).end();

    //se nao encontrar nenhum usuario com o cpf informado
    return res.status(401).json({ error: "Usuário não encontrado" }).end();
}
