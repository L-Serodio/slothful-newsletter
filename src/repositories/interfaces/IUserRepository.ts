import UserDTO from "../../dto/UserDTO";
import { User } from "../../models/User";

export default interface IUserRepository {
    findByEmail(email: string): Promise<User | undefined>;
    create(userDTO: UserDTO): Promise<User>;
}