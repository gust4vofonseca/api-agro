import { ICreateUserDTO } from "../dtos/IUserDTO";

export class CreateUserService {
    constructor() {}

    async execute({name, email, password, isAdmin}: ICreateUserDTO): Promise<void> {

    }
}