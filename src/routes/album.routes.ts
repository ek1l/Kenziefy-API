import { Router } from 'express';
import { ensure, ensureAlbum, ensureBand } from '../middleware';
import { albumCreateSchema } from '../schemas';
import { albumController, trackController } from '../controller';

export const albumRouter = Router();

albumRouter.get('', albumController.list);

albumRouter.post(
  '',
  ensure.bodyIsValid(albumCreateSchema),
  ensureBand.idExists,
  albumController.create,
);

albumRouter.use('/:albumId/tracks', ensureAlbum.idExists);

albumRouter.get('/:albumId/tracks', trackController.listByAlbumId);
