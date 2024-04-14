// import { Band } from '@prisma/client';
import { z } from 'zod';
import { bandSchema, bandCreateSchema } from '../schemas';
type Band = z.infer<typeof bandSchema>;
type BandCreate = z.infer<typeof bandCreateSchema>;
export { Band, BandCreate };
