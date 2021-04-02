export default interface IRepository<T> {
    insert(entity: T) : Promise<void>,
    delete(id: string) : Promise<void>,
    uptade(entity: T) : Promise<void>,
    find(id: string) : Promise<T>
};