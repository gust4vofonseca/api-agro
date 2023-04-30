import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../dtos/IUserDTO";
import { IUserRepository } from "../infra/repositories/IUserRepository";
import { hash } from "bcryptjs";
import { User } from "../infra/typeorm/entities/User";

@injectable()
export class ListAllUsersService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(): Promise<User[]> {
        const data = await this.userRepository.findAll();

        data.sort((a, b) => {
            if(a.name.toUpperCase() < b.name.toUpperCase() ) {
                return -1;
            } 
            if (a.name.toUpperCase()  > b.name.toUpperCase() ) {
                return 1;
            }

            return 0;
        });


        return data;
    }
}