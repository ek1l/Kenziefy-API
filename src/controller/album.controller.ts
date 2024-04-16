import { Request, Response } from 'express';
import { AlbumService } from '../services';

export class AlbumController {
  private service = new AlbumService();
  public list = async (req: Request, res: Response): Promise<Response> => {
    const albums = await this.service.list();
    return res.status(200).json(albums);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const album = await this.service.create(req.body);
    return res.status(201).json(album);
  };
}
export const albumController = new AlbumController();
