import { Router } from 'express';
import { ensure, ensureBand } from '../middleware';
import { albumCreateSchema } from '../schemas';
import { AlbumController } from '../controller';

export const albumRouter = Router();
const albumController = new AlbumController();

albumRouter.get('', albumController.list);

albumRouter.post(
  '',
  ensure.bodyIsValid(albumCreateSchema),
  ensureBand.idExists,
  albumController.create,
);
