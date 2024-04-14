import { z } from 'zod';

const bandSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(255),
  //Junção do .optional (undefined) com nullable (null)
  foundedAt: z.number().nullish(),
});

const bandCreateSchema = bandSchema.omit({ id: true });

export { bandSchema, bandCreateSchema }