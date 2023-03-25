import { Router } from "express";
import { listar, inserir, buscarPorPlaca, buscarPorId, atualizar, deletar } from "../controller/abastecimento";

export const routerAbastecimento = Router();


routerAbastecimento.get("/abastecimento/listar", listar);
routerAbastecimento.post("/abastecimento/inserir", inserir);
routerAbastecimento.get("/abastecimento/buscarPlaca/:placa", buscarPorPlaca);
routerAbastecimento.get("/abastecimento/buscarId/:id", buscarPorId);
routerAbastecimento.put("/abastecimento/atualizar/:id", atualizar);
routerAbastecimento.delete("/abastecimento/deletar/:id", deletar);

