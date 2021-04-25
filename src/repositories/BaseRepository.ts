import IRepository from "./IRepository";

export default abstract class BaseRepository<T> implements IRepository<T> {

    insert(entity: T): Promise<void> {
        throw new Error("Method not implemented.");
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    uptade(entity: T): Promise<void> {
        throw new Error("Method not implemented.");
    }

    find(id: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

};