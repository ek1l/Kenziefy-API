import { Router } from 'express';
import { ensure } from '../middleware';
import { bandCreateSchema } from '../schemas';
import { bandController, musicianController } from '../controller';

export const bandRouter = Router();

bandRouter.get('', bandController.list);
bandRouter.post(
  '',
  ensure.bodyIsValid(bandCreateSchema),
  bandController.create,
);

// MUSICIANS

bandRouter.get('/:bandId/musicians', musicianController.list);
bandRouter.post('/:bandId/musicians', musicianController.create);
