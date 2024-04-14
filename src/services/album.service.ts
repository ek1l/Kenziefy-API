import { prisma } from '../database';
import { Album, AlbumCreate, Band, BandCreate } from '../interfaces';
import { albumSchema } from '../schemas';

export class AlbumService {
  public list = async (): Promise<Album[]> => {
    return await prisma.album.findMany();
  };

  public create = async (payload: AlbumCreate): Promise<Album> => {
    const newAlbum = await prisma.album.create({
      data: payload,
    });

    return albumSchema.parse(newAlbum);
  };
}
