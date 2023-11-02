export interface IFoodService<FoodType, RecipeType> {
    getAllFoodsCategory(): Promise<FoodType[]>
    getFoodCategory(id: number): Promise<FoodType | null>
    deleteFoodCategory(id: number): Promise<string>
    addFoodCategory(payload: FoodType): Promise<FoodType>
    getAllRecipesByFoodCategory(id: string): Promise<RecipeType[]>
    //getRecipesByFoodPage(page: string, limit: string, id?: string): Promise<RecipeType[]>
    addRecipeByFoodCategory(payload: FoodType): Promise<RecipeType>
}