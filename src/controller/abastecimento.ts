import { Request, Response } from "express";
import { prisma } from "../DAO/prismaConnect";

export const listar = async (req: Request, res: Response) => {

    const abastecimento = await prisma.abastecimento.findMany();

    if (abastecimento) return res.status(200).json(abastecimento).end();

    return res.status(400).send("Erro ao listar abastecimentos").end();

}

export const buscarPorId = async (req: Request, res: Response) => {
    const { id } = req.params;

    const abastecimento = await prisma.abastecimento.findUnique({
        where: {
            id: Number(id)
        }
    })

    if (abastecimento) return res.status(200).json(abastecimento).end();

    //se nao encontrar abastecimento com o id inserido
    return res.status(400).send("Erro ao buscar abastecimento").end();
}

export const buscarPorPlaca = async (req: Request, res: Response) => {
    
    const { placa } = req.params;

    const abastecimento = await prisma.abastecimento.findMany({
        where: {
            placa: placa
        }
    })


    if (abastecimento) return res.status(200).json(abastecimento).end();

    //se nao encontrar abastecimento com a placa inserida
    return res.status(400).send("Erro ao buscar abastecimento").end();
}

export const inserir = async (req: Request, res: Response) => {
    const { valor, litros, tipo, placa } = req.body;

    const abastecimento = await prisma.abastecimento.create({
        data: {
            valor: valor,
            litros: litros,
            tipo: tipo,
            placa: placa
        }
    });

    if (abastecimento) return res.status(200).json({abastecimento, message:"Inserido com sucesso"}).end();

    return res.status(400).send("Erro ao inserir abastecimento").end();
}

export const deletar = async (req: Request, res: Response) => {

    const { id } = req.params;

    const abastecimento = await prisma.abastecimento.delete({
        where: {
            id: Number(id)
        }
    })

    if (abastecimento) return res.status(200).json(abastecimento).end();

    //se nao encontrar abastecimento com o id inserido
    return res.status(400).send("Erro ao deletar abastecimento").end();

}

export const atualizar = async (req: Request, res: Response) => {

    const { id, valor, litros, tipo, placa } = req.body;

    const abastecimento = await prisma.abastecimento.update({
        where: {
            id: id
        },
        data: {
            valor: Number(valor),
            litros: Number(litros),
            tipo: tipo,
            placa: placa
        }
    })

    if (abastecimento) return res.status(200).json(abastecimento).end();

    //se nao encontrar abastecimento com o id inserido
    return res.status(400).send("Erro ao atualizar abastecimento").end();

}
