import { Repository } from "typeorm";
import { IUserTokensRepository } from "../../repositories/IUserTokensRepository";
import { UserTokens } from "../entities/UserTokens";
import { ICreateUserTokenDTO } from "@modules/users/dtos/ICreateUserTokenDTO";
import { dataSource } from "@shared/infra/typeorm";


class UserTokensRepository implements IUserTokensRepository {

    private ormRepository: Repository<UserTokens>;

    constructor() {
      this.ormRepository = dataSource.getRepository(UserTokens);
    }

    async create({
        expires_date,
        refresh_token,
        user_id,
    }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = this.ormRepository.create({
            expires_date,
            refresh_token,
            user_id,
        });

        await this.ormRepository.save(userToken);

        return userToken;
    }

    async findByUserIdAndRefreshToken(
        user_id: string,
        refresh_token: string
    ): Promise<UserTokens> {
        const usersToken = await this.ormRepository.findOneBy({
            user_id,
            refresh_token,
        });

        return usersToken;
    }

    async deleteById(user_token_id: string): Promise<void> {
        await this.ormRepository.delete(user_token_id);
    }

    async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
        const userToken = await this.ormRepository.findOneBy({ refresh_token });

        return userToken;
    }
}

export { UserTokensRepository };
