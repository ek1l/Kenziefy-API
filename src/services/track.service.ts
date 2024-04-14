import { prisma } from '../database';
import { Track, TrackCreate } from '../interfaces';
import { trackSchema } from '../schemas';

export class TrackService {
  private track = prisma.track;

  public list = async (): Promise<Track[]> => {
    return await this.track.findMany();
  };

  public create = async (payload: TrackCreate): Promise<Track> => {
    const newTrack = await this.track.create({
      data: payload,
    });
    return trackSchema.parse(newTrack);
  };
}
