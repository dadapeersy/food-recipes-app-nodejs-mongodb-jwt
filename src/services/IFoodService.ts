export interface IFoodService<Type> {
    getAllFoodsCategory(): Promise<Type[]>
    getFoodCategory(id: number): Promise<Type | null>
    deleteFoodCategory(id: number): Promise<string>
    addFoodCategory(payload: Type): Promise<Type>
    updateFoodCategory(id: number, payload: Type): Promise<Type | null>
}