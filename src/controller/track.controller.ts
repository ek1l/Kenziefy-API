import { Request, Response } from 'express';
import { TrackService } from '../services';

export class TrackController {
  private service = new TrackService();
  public list = async (req: Request, res: Response): Promise<Response> => {
    const tracks = await this.service.list();
    return res.status(200).json(tracks);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const track = await this.service.create(req.body);
    return res.status(201).json(track);
  };
}
