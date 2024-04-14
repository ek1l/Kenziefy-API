import { z } from 'zod';
import { albumCreateSchema, albumSchema } from '../schemas';

type Album = z.infer<typeof albumSchema>;
type AlbumCreate = z.infer<typeof albumCreateSchema>;
export { Album, AlbumCreate };
