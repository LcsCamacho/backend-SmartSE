import { Router } from "express";

import {inserir, listar, buscarPorPlaca, buscarPorRenavam, deletar, atualizar} from "../controller/veiculo"

export const routerVeiculo = Router();

routerVeiculo.post('/veiculo/inserir', inserir);
routerVeiculo.get('/veiculo/listar', listar);
routerVeiculo.get('/veiculo/buscarPlaca/:placa', buscarPorPlaca);
routerVeiculo.get('/veiculo/buscarRenavam/:renavam', buscarPorRenavam);
routerVeiculo.delete('/veiculo/deletar/:placa', deletar);
routerVeiculo.put('/veiculo/atualizar/:placa', atualizar);


