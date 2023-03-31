import { Request, Response } from "express";
import { prisma } from "../DAO/prismaConnect";

export const listar = async (req: Request, res: Response) => {
    
    try {
        const veiculos = await prisma.veiculo.findMany();

        if (veiculos) return res.status(200).json(veiculos).end();

        return res.status(400).send("Nenhum veiculo encontrado").end();
    } catch (error) {
        return res.status(400).send("Erro ao listar veiculos").end();
    }

}

export const inserir = async (req: Request, res: Response) => {
    const { placa, marca, modelo, ano, cor, potencia, renavam } = req.body;

    try {
        const veiculo = await prisma.veiculo.create({
            data: {
                placa: placa,
                marca: marca,
                modelo: modelo,
                ano: ano,
                cor: cor,
                potencia: potencia,
                renavam: renavam
            }
        })
        
        if (veiculo) return res.status(200).json({veiculo, message:"Inserido com sucesso"}).end();
    } catch (error) {
        return res.status(400).send("Erro ao inserir veiculo").end();
    }
    
}

export const deletar = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const veiculo = await prisma.veiculo.delete({
            where: {
                id: Number(id)
            }
        })
        if (veiculo) return res.status(200).json(veiculo).end();
    
        //se nao encontrar nenhum veiculo com o id informado
        return res.status(404).send("Veiculo nao encontrado").end();
    
    } catch (error) {
        return res.status(400).send("Erro ao deletar veiculo").end();
    }
    
}

export const atualizar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { placa, marca, modelo, ano, cor, potencia, renavam } = req.body;
    
    try {
        const veiculo = await prisma.veiculo.update({
            where: {
                id: Number(id)
            },
            data: {
                marca: marca,
                modelo: modelo,
                ano: ano,
                cor: cor,
                potencia: potencia,
                renavam: renavam,
                placa: placa
            }
        })
    
        if (veiculo) return res.status(200).json(veiculo).end();
    
        //se nao encontrar nenhum veiculo com o id informado
        return res.status(400).send("Veiculo nao encontrado").end();
    
    } catch (error) {
        return res.status(400).send("Erro ao atualizar veiculo").end();
    }
    
}

