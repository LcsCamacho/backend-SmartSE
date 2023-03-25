import { Request, Response } from "express";
import { prisma } from "../DAO/prismaConnect";

export const listar = async (req: Request, res: Response) => {
    const veiculos = await prisma.veiculo.findMany();

    if (veiculos) return res.status(200).json(veiculos).end();

    return res.status(400).send("Erro ao listar veiculos").end();

}

export const inserir = async (req: Request, res: Response) => {
    const { placa, marca, modelo, ano, cor, potencia, renavam } = req.body;

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

    return res.status(400).send("Erro ao inserir veiculo").end();

}

export const deletar = async (req: Request, res: Response) => {

    const { placa } = req.params;

    const veiculo = await prisma.veiculo.delete({
        where: {
            placa: placa
        }
    })

    if (veiculo) return res.status(200).json(veiculo).end();

    //se nao encontrar nenhum veiculo com a placa inserida
    return res.status(400).send("Erro ao deletar veiculo").end();

}

export const atualizar = async (req: Request, res: Response) => {

    const { placa, marca, modelo, ano, cor, potencia, renavam } = req.body;

    const veiculo = await prisma.veiculo.update({
        where: {
            placa: placa
        },
        data: {
            marca: marca,
            modelo: modelo,
            ano: ano,
            cor: cor,
            potencia: potencia,
            renavam: renavam
        }
    })

    if (veiculo) return res.status(200).json(veiculo).end();

    //se nao encontrar nenhum veiculo com a placa inserida
    return res.status(400).send("Erro ao atualizar veiculo").end();

}

export const buscarPorPlaca = async (req: Request, res: Response) => {

    const { placa } = req.params;

    const veiculo = await prisma.veiculo.findUnique({
        where: {
            placa: placa
        }
    })

    if (veiculo) return res.status(200).json(veiculo).end();

    //se nao encontrar nenhum veiculo com a placa inserida
    return res.status(400).send("Erro ao buscar veiculo").end();
}

export const buscarPorRenavam = async (req: Request, res: Response) => {
    const { renavam } = req.params;

    const veiculo = await prisma.veiculo.findUnique({
        where: {
            renavam: renavam
        }
    })

    if (veiculo) return res.status(200).json(veiculo).end();

    //se nao encontrar nenhum veiculo com a placa inserida  
    return res.status(400).send("Erro ao buscar veiculo").end();
}


