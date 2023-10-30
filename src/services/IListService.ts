export interface IListService<Type> {
    getAllItems(): Promise<Type[]>
    addItem(payload: Type): Promise<Type>
}