import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "@config/auth";


// import { AppError } from "@shared/errors/AppError";
import { IUserTokensRepository } from "../infra/repositories/IUserTokensRepository";
import { IDateProvider } from "@shared/providers/DateProvider/IDateProvider";
import { IUserRepository } from "../infra/repositories/IUserRepository";

interface IPayload {
    sub: string;
    email: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
        isAdmin: boolean;
    };
    token: string;
    refresh_token: string;
}


@injectable()
export class RefreshTokenService {
    constructor(
        @inject("UserTokensRepository")
        private userTokensRepository: IUserTokensRepository,
        @inject("DateProvider")
        private dayjsDateProvider: IDateProvider,
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {}
    async execute(token: string): Promise<IResponse> {
        const { email, sub } = verify(
            token,
            auth.secret_refresh_token
        ) as IPayload;

        const user_id = sub;

        const userToken =
            await this.userTokensRepository.findByUserIdAndRefreshToken(
                user_id,
                token
            );

        if (!userToken) {
            return;
        }

        await this.userTokensRepository.deleteById(userToken.id);

        const expires_date = this.dayjsDateProvider.addDays(
            auth.expires_refresh_token_days
        );

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token,
        });

        await this.userTokensRepository.create({
            expires_date,
            refresh_token,
            user_id,
        });

        const newToken = sign({}, auth.secret_token, {
            subject: user_id,
            expiresIn: auth.expires_in_token,
        });

        const user = await this.userRepository.findById(user_id)

        const RefreshtokenReturn: IResponse = {
            token: newToken,
            user: {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            },
            refresh_token,
        };

        return RefreshtokenReturn;
    }
}
