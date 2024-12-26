import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateUser = [
  body("name").isString().notEmpty().withMessage("Nome é obrigatório."),
  body("email").isEmail().withMessage("E-mail inválido."),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
