import { inject } from "tsyringe";
import { IUserDTO } from "../dtos/IUserDTO";
import { IUserRepository } from "../infra/repositories/IUserRepository";
import { hash } from "bcryptjs";

export class CreateUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password}: IUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            return;
        }

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            password: passwordHash,
            email
        });
    }
}