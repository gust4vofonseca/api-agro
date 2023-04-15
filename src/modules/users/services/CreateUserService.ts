import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export class CreateUserService {
    constructor() {}

    async execute({name, email, password, isAdmin}: ICreateUserDTO): Promise<void> {

    }
}