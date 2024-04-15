import { z } from 'zod';

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

export { trackSchema, trackCreateSchema, trackCreateSchemaValidator };
