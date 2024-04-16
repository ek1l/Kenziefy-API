import { z } from 'zod';
import { musicianCreateSchema, musicianSchema } from '../schemas';

type Musician = z.infer<typeof musicianSchema>;

type MusicianCreate = z.infer<typeof musicianCreateSchema>;

type MusicianBodyCreate = MusicianCreate & { bandId: number };

export { Musician, MusicianCreate, MusicianBodyCreate };
