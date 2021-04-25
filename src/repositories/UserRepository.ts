import { getRepository, Repository } from "typeorm";
import UserDTO from "../dto/UserDTO";
import { User } from "../models/User";
import IUserRepository from "./interfaces/IUserRepository";

class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async findByEmail(email: string): Promise<User> {
        const user = await this.ormRepository.findOne({
            where: { email },
        });

        return user;
    }
    public async create({ name, email, password }: UserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
        });

        await this.ormRepository.save(user);

        return user;
    }
};

export { UserRepository };