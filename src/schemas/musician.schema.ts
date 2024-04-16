import { z } from 'zod';

const musicianSchema = z.object({
  id: z.number().positive(),
  firstName: z.string().max(255),
  lastName: z.string().max(255),
  birthDate: z.date().nullish(),
});

const musicianCreateSchema = musicianSchema.omit({ id: true }).extend({
  joined: z.number().positive(),
  left: z.date().nullish(),
});

export { musicianSchema, musicianCreateSchema };
