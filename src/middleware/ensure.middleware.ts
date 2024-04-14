import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export class EnsureMiddleware {
  public bodyIsValid =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
      req.body = schema.parse(req.body);
      return next();
    };
}

export const ensure = new EnsureMiddleware();
