import { Router } from "express";
import { login, listar, inserir, buscar, atualizar, deletar } from "../controller/usuario";

export const routerUsuario = Router();

routerUsuario.get("/usuario/listar", listar)
routerUsuario.post("/usuario/buscar", buscar)
routerUsuario.post("/login", login);
routerUsuario.post("/usuario/cadastrar", inserir);
routerUsuario.put("/usuario/atualizar/:id", atualizar);
routerUsuario.delete("/usuario/deletar/:id", deletar);


