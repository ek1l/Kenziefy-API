import { Router } from 'express';
import { BandController } from '../controller';
import { ensure } from '../middleware';
import { bandCreateSchema } from '../schemas';
export const bandRouter = Router();
const bandController = new BandController();

bandRouter.get('', bandController.list);
bandRouter.post(
  '',
  ensure.bodyIsValid(bandCreateSchema),
  bandController.create,
);
