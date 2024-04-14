import { prisma } from '../database';
import { Band, BandCreate } from '../interfaces';
export class BandService {
  public list = async (): Promise<Band[]> => {
    return await prisma.band.findMany();
  };

  public create = async (payload: BandCreate): Promise<Band> => {
    return await prisma.band.create({
      data: payload,
    });
  };
}
