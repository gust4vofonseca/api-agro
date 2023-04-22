import { ICreateUserTokenDTO } from "@modules/users/dtos/ICreateUserTokenDTO";
import { UserTokens } from "../typeorm/entities/UserTokens";


export interface IUserTokensRepository {
    create(data: ICreateUserTokenDTO): Promise<UserTokens>;
    findByUserIdAndRefreshToken(
        user_id: string,
        refresh_token: string
    ): Promise<UserTokens>;
    deleteById(user_token_id: string): Promise<void>;
    findByRefreshToken(refresh_token: string): Promise<UserTokens>;
}

