import { Router } from 'express';
import { trackController } from '../controller';
import { ensure } from '../middleware';
import { trackCreateSchema } from '../schemas';
export const trackRouter = Router();

trackRouter.get('', trackController.list);

trackRouter.get('/:trackId', trackController.retrieve);

// trackRouter.post(
//   '',
//   ensure.bodyIsValid(trackCreateSchema),
//   trackController.create,
// );