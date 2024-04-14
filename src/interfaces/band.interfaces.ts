import { Band } from '@prisma/client';

type BandCreate = Omit<Band, 'id'>;
export { Band, BandCreate };
