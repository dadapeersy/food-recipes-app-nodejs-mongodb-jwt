export interface IListService<Type> {
    getAllItems(): Promise<Type[]>
    getItem(id: number): Promise<Type | null>
    addItem(payload: Type): Promise<Type>
    updateItem(id: number, payload: Type): Promise<Type | null>
    deleteItem(id: number): Promise<string>
}