import { Request, Response } from "express";

export const doTest = (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Test users");
};
