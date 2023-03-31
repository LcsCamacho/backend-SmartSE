import { Router } from "express";

import {inserir, listar, deletar, atualizar} from "../controller/veiculo"

import { auth } from "../middlewares/middleware";

export const routerVeiculo = Router();

routerVeiculo.post('/veiculo/inserir', auth, inserir);
routerVeiculo.get('/veiculo/listar', listar);
routerVeiculo.delete('/veiculo/deletar/:id', auth, deletar);
routerVeiculo.put('/veiculo/atualizar/:id',auth, atualizar);


