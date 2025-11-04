import z from "zod";
import {
    CategoryListSchema,
    CategoryMealListSchema,
    CategoryMealSchema,
    CategorySchema,
    MealListSchema,
    MealSchema,
} from "./schema";

type Category = z.infer<typeof CategorySchema>;
type CategoryList = z.infer<typeof CategoryListSchema>;

type CategoryMeal = z.infer<typeof CategoryMealSchema>;
type CategoryMealList = z.infer<typeof CategoryMealListSchema>;

type Meal = z.infer<typeof MealSchema>;
type MealList = z.infer<typeof MealListSchema>;

export {
    Category,
    CategoryList,
    CategoryMeal,
    CategoryMealList,
    Meal,
    MealList
};

