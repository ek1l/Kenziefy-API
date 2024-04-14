import { Router } from 'express';
import { TrackController } from '../controller';
import { ensure } from '../middleware';
import { trackCreateSchema } from '../schemas';
export const trackRouter = Router();
const trackController = new TrackController();

trackRouter.get('', trackController.list);

trackRouter.post(
  '',
  ensure.bodyIsValid(trackCreateSchema),
  trackController.create,
);
