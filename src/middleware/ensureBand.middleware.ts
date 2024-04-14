import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database';

class EnsureBandMiddleware {
  public idExists = async (req: Request, res: Response, next: NextFunction) => {
    const foundBand = await prisma.band.findFirst({
      where: {
        id: req.body.bandId,
      },
    });
    if (!foundBand) {
      return res.status(404).json({ message: 'Band not found' });
    }
    res.locals = { foundBand };
    return next();
  };
}

export const ensureBand = new EnsureBandMiddleware();
