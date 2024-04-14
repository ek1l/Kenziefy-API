import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database';

class EnsureAlbumMiddleware {
  public idExists = async (req: Request, res: Response, next: NextFunction) => {
    const foundAlbum = await prisma.album.findFirst({
      where: {
        id: Number(req.params.albumId),
      },
    });

    if (!foundAlbum) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.locals = { foundAlbum };
    return next();
  };
}

export const ensureAlbum = new EnsureAlbumMiddleware();
