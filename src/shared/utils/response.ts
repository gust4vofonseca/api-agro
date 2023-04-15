import { Request, Response } from 'express';
import { sleep } from './sleep';

export async function ResponseJSON(
  request: Request,
  response: Response,
): Promise<Response> {
  await sleep(700);

  return response
    .status(200)
    .json({ status: 200, message: 'Request received with success.' });
}
