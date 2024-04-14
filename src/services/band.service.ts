import { prisma } from '../database';
import { Band, BandCreate } from '../interfaces';
import { bandSchema } from '../schemas';
export class BandService {

  public list = async (): Promise<Band[]> => {
    return await prisma.band.findMany();
  };

  public create = async (payload: BandCreate): Promise<Band> => {
    const newBand = await prisma.band.create({
      data: payload,
    });
    return bandSchema.parse(newBand);
  };
  
}
