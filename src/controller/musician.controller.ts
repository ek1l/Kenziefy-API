import { Request, Response } from 'express';
import { MusicianService } from '../services';

export class MusicianController {
  private service = new MusicianService();

  public list = async (req: Request, res: Response): Promise<Response> => {
    const musicians = await this.service.list();
    return res.status(200).json(musicians);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const payload = {
      ...req.body,
      bandId: Number(req.params.bandId),
    };
    const musician = await this.service.create(payload);
    return res.status(201).json(musician);
  };
}
export const musicianController = new MusicianController();
