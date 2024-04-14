import { Request, Response } from 'express';
import { AlbumService } from '../services';

export class AlbumController {
  private service = new AlbumService();
  public list = async (req: Request, res: Response): Promise<Response> => {
    const bands = await this.service.list();
    return res.status(200).json(bands);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const band = await this.service.create(req.body);
    return res.status(201).json(band);
  };
}
export const albumController = new AlbumController();
