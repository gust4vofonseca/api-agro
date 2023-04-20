import { Repository } from "typeorm";
import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../entities/User";
import { dataSource } from "@shared/infra/typeorm";
import { IUserDTO } from "@modules/users/dtos/IUserDTO";

export class UserRepository implements IUserRepository {

    private ormRepository: Repository<User>;

    constructor() {
      this.ormRepository = dataSource.getRepository(User);
    }

    async create({name, email, isAdmin=true, password}: IUserDTO): Promise<void> {
        const user = this.ormRepository.create({
            name,
            password,
            email,
            isAdmin,
        });

        await this.ormRepository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.ormRepository.findOneBy({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.ormRepository.findOneBy({id});
        return user;
    }

    async deleteById(id: string): Promise<void> {
        await this.ormRepository.delete({id});
    }

    async update(user: User): Promise<void> {
        await this.ormRepository.save(user);
    }
}