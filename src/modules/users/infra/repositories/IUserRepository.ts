import { IUserDTO } from "@modules/users/dtos/IUserDTO";
import { User } from "../typeorm/entities/User";

export interface IUserRepository {
    create(data: IUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
}