import { prisma } from '../database';
import { Musician, MusicianBodyCreate } from '../interfaces';
import { musicianSchema } from '../schemas';

export class MusicianService {
  private musician = prisma.musician;
  public list = async (): Promise<Musician[]> => {
    return await this.musician.findMany();
  };

  public create = async (payload: MusicianBodyCreate): Promise<Musician> => {
    const newMusician = await this.musician.create({
      data: {
        firstName: payload.firstName,
        lastName: payload.lastName,
        GroupMember: {
          create: {
            joined: payload.joined,
            band: {
              connect: {
                id: payload.bandId,
              },
            },
          },
        },
      },
    });

    return musicianSchema.parse(newMusician);
  };
}
