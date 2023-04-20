import { inject } from "tsyringe";
import { IUserDTO } from "../dtos/IUserDTO";
import { IUserRepository } from "../infra/repositories/IUserRepository";
import { hash } from "bcryptjs";

export class DeleteUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<void> {
        const userAlreadyExists = await this.userRepository.findById(id);

        if (!userAlreadyExists) {
            return;
        }

        await this.userRepository.deleteById(id);
    }
}