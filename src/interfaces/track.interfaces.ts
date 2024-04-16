// import { Band } from '@prisma/client';
import { z } from 'zod';
import {
  trackSchema,
  trackCreateSchema,
  trackRetrieveSchema,
  trackCreateSchemaValidator,
} from '../schemas';
type Track = z.infer<typeof trackSchema>;
type TrackCreate = z.infer<typeof trackCreateSchema>;
type TrackRetrieve = z.infer<typeof trackRetrieveSchema>;
type trackCreateValidator = z.infer<typeof trackCreateSchemaValidator>;
export { Track, TrackCreate, TrackRetrieve, trackCreateValidator };
