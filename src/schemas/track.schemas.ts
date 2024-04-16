import { z } from 'zod';
import { albumSchema } from './album.schemas';

const trackSchema = z.object({
  id: z.number().positive(),
  title: z.string().max(255),
  trackNumber: z.number().positive().nullish(),
  length: z.number().positive(),
  albumId: z.number().positive(),
});

const trackCreateSchemaValidator = trackSchema.omit({
  id: true,
  albumId: true,
});
const trackCreateSchema = trackSchema.omit({ id: true });
const trackRetrieveSchema = trackSchema.omit({ albumId: true }).extend({
  album: albumSchema,
});
export {
  trackSchema,
  trackCreateSchema,
  trackCreateSchemaValidator,
  trackRetrieveSchema,
};
