import express from 'express';
import 'express-async-errors';
import { albumRouter, bandRouter } from './routes';
import { handleErrors } from './middleware';

const app = express();
app.use(express.json());
app.use('/api/bands', bandRouter);
app.use('/api/albums', albumRouter);
app.use(handleErrors);
export default app;
