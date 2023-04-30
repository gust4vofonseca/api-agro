import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../dtos/IUserDTO";
import { IUserRepository } from "../infra/repositories/IUserRepository";
import { hash } from "bcryptjs";

@injectable()
export class UpdateUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password, id}: IUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findById(id);

        if (!userAlreadyExists) {
            return;
        }

        if (name) userAlreadyExists.name = name;

        if (email) userAlreadyExists.email = email;    

        if (password) {
            const passwordHash = await hash(password, 8);
            userAlreadyExists.password = passwordHash;
        }    

        await this.userRepository.update(userAlreadyExists);
    }
}