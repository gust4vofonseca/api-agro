import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "@config/auth";
import { IUserRepository } from "../infra/repositories/IUserRepository";
import { IDateProvider } from "@shared/providers/DateProvider/IDateProvider";
import { IUserTokensRepository } from "../infra/repositories/IUserTokensRepository";
// import { AppError } from "@shared/errors/AppError";

interface IRquest {
    email: string;
    password: string;
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
export class AuthenticateUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
        @inject("UserTokensRepository")
        private userTokensRepository: IUserTokensRepository,
        @inject("DateProvider")
        private dayjsDateProvider: IDateProvider
    ) {}

    async execute({ email, password }: IRquest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        console.log({user})
        if (!user) {
            return;
            // throw new AppError("Email or password incorrect!");
        }

        const passwordMatch = await compare(password, user.password);

        console.log({passwordMatch})

        if (!passwordMatch) {
            return;
            // throw new AppError("Email or password incorrect!");
        }

        const token = sign({}, auth.secret_token, {
            subject: user.id,
            expiresIn: auth.expires_in_token,
        });

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: user.id,
            expiresIn: auth.expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dayjsDateProvider.addDays(
            auth.expires_refresh_token_days
        );

        await this.userTokensRepository.create({
            expires_date: refresh_token_expires_date,
            refresh_token,
            user_id: user.id,
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            },
            refresh_token,
        };

        return tokenReturn;
    }
}
