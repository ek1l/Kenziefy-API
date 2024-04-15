import { Request, Response } from 'express';
import { TrackService } from '../services';

export class TrackController {
  private service = new TrackService();

  public list = async (req: Request, res: Response): Promise<Response> => {
    const tracks = await this.service.list();
    return res.status(200).json(tracks);
  };

  public listByAlbumId = async (
    req: Request,
    res: Response,
  ): Promise<Response> => {
    const albumId = Number(req.params.albumId);
    const tracks = await this.service.listByAlbumId(albumId);
    return res.status(200).json(tracks);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const payload = { ...req.body, albumId: Number(req.params.albumId) };
    const track = await this.service.create(payload);
    console.log(track);
    return res.status(201).json(track);
  };
}

export const trackController = new TrackController();
