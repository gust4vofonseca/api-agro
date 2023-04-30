import { inject, injectable } from "tsyringe";
import { IUserDTO } from "../dtos/IUserDTO";
import { IUserRepository } from "../infra/repositories/IUserRepository";
import { hash } from "bcryptjs";

@injectable()
export class DeleteUserService {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(id: string): Promise<void> {
        console.log({})
        const userAlreadyExists = await this.userRepository.findById(id);

        if (!userAlreadyExists) {
            return;
        }

        await this.userRepository.deleteById(id);
    }
}