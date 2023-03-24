import { Router } from "express";
import { example } from "../controller/example";

export const routerExample = Router();

routerExample.get("/",example)

