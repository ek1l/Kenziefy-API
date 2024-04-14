// import { Band } from '@prisma/client';
import { z } from 'zod';
import { trackSchema, trackCreateSchema } from '../schemas';
type Track = z.infer<typeof trackSchema>;
type TrackCreate = z.infer<typeof trackCreateSchema>;
export { Track, TrackCreate };
