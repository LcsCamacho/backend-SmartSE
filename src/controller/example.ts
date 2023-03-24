import { Request, Response } from "express";

export const example = (req: Request, res: Response) => {
    res.send("Hello World!");
}