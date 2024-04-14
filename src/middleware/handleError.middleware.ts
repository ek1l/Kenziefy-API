import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

class HandleErrorsMiddleware {
  public static execute = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response => {
    if (error instanceof ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    return res.status(500).json({ message: 'Internal server error' });
  };
}

export const handleErrors = HandleErrorsMiddleware.execute;
