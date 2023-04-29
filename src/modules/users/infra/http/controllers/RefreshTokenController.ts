import { RefreshTokenService } from "@modules/users/services/RefreshTokenService";
import { Request, Response } from "express";
import { container } from "tsyringe";


export class RefreshTokenController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { token } =  request.body;

        const refreshTokenService = container.resolve(RefreshTokenService);

        const refreshToken = await refreshTokenService.execute(token);

        return response.json(refreshToken);
    }
}