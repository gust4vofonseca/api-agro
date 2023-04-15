import 'express-async-errors';
import express, {
    NextFunction,
    Request,
    RequestHandler,
    Response,
  } from 'express';
import cors from 'cors';
import routes from '@shared/infra/http/routes';
import { writeApplicationLogError } from '@shared/utils/writeApplicationLogError';
import AppError from '@shared/errors/AppError';

const app = express();

const url = 'http://localhost:3000';

app.use(cors({ origin: url }));
app.use(express.json() as RequestHandler);

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    writeApplicationLogError(err.message, err.statusCode, err.module);

    return response
      .status(err.statusCode)
      .json({ message: err.message, status: err.statusCode });
  }

  writeApplicationLogError(JSON.stringify(err), 500, 'default');
});

export { app };