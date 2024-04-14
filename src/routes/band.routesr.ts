import { Router } from 'express';
import { ensure } from '../middleware';
import { bandCreateSchema } from '../schemas';
import { bandController } from '../controller';

export const bandRouter = Router();

bandRouter.get('', bandController.list);
bandRouter.post(
  '',
  ensure.bodyIsValid(bandCreateSchema),
  bandController.create,
);
