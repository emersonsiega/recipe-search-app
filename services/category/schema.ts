import { z } from "zod";

const CategorySchema = z
  .object({
    idCategory: z.string(),
    strCategory: z.string(),
    strCategoryDescription: z.string().optional(),
    strCategoryThumb: z.string().url().optional(),
  })
  .transform((data) => ({
    id: data.idCategory,
    name: data.strCategory,
    description: data.strCategoryDescription,
    image: data.strCategoryThumb,
  }));

const CategoryListSchema = z.array(CategorySchema);

const CategoryMealSchema = z
  .object({
    idMeal: z.string(),
    strMeal: z.string(),
    strMealThumb: z.string().optional(),
  })
  .transform((data) => ({
    id: data.idMeal,
    name: data.strMeal,
    image: data.strMealThumb,
  }));

const CategoryMealListSchema = z.array(CategoryMealSchema);

const MealSchema = z
  .object({
    idMeal: z.string(),
    strMeal: z.string(),
    strCategory: z.string(),
    strArea: z.string().optional(),
    strInstructions: z.string(),
    strMealThumb: z.string().optional(),
    strYoutube: z.string().optional(),
    strIngredient1: z.string().optional(),
    strIngredient2: z.string().optional(),
    strIngredient3: z.string().optional(),
    strIngredient4: z.string().optional(),
    strIngredient5: z.string().optional(),
    strIngredient6: z.string().optional(),
    strIngredient7: z.string().optional(),
    strIngredient8: z.string().optional(),
    strIngredient9: z.string().optional(),
    strIngredient10: z.string().optional(),
    strIngredient11: z.string().optional(),
    strIngredient12: z.string().optional(),
    strIngredient13: z.string().optional(),
    strIngredient14: z.string().optional(),
    strIngredient15: z.string().optional(),
    strIngredient16: z.string().optional(),
    strIngredient17: z.string().optional(),
    strIngredient18: z.string().optional(),
    strIngredient19: z.string().optional(),
    strIngredient20: z.string().optional(),
    strMeasure1: z.string().optional(),
    strMeasure2: z.string().optional(),
    strMeasure3: z.string().optional(),
    strMeasure4: z.string().optional(),
    strMeasure5: z.string().optional(),
    strMeasure6: z.string().optional(),
    strMeasure7: z.string().optional(),
    strMeasure8: z.string().optional(),
    strMeasure9: z.string().optional(),
    strMeasure10: z.string().optional(),
    strMeasure11: z.string().optional(),
    strMeasure12: z.string().optional(),
    strMeasure13: z.string().optional(),
    strMeasure14: z.string().optional(),
    strMeasure15: z.string().optional(),
    strMeasure16: z.string().optional(),
    strMeasure17: z.string().optional(),
    strMeasure18: z.string().optional(),
    strMeasure19: z.string().optional(),
    strMeasure20: z.string().optional(),
  })
  .transform((data) => ({
    id: data.idMeal,
    name: data.strMeal,
    image: data.strMealThumb,
    category: data.strCategory,
    area: data.strArea,
    instructions: data.strInstructions
      .trim()
      .split("\r\n")
      .filter((e) => e.trim().length > 0),
    tutorial: data.strYoutube,
    ingredients: [
      { ingredient: data.strIngredient1, measure: data.strMeasure1 },
      { ingredient: data.strIngredient2, measure: data.strMeasure2 },
      { ingredient: data.strIngredient3, measure: data.strMeasure3 },
      { ingredient: data.strIngredient4, measure: data.strMeasure4 },
      { ingredient: data.strIngredient5, measure: data.strMeasure5 },
      { ingredient: data.strIngredient6, measure: data.strMeasure6 },
      { ingredient: data.strIngredient7, measure: data.strMeasure7 },
      { ingredient: data.strIngredient8, measure: data.strMeasure8 },
      { ingredient: data.strIngredient9, measure: data.strMeasure9 },
      { ingredient: data.strIngredient10, measure: data.strMeasure10 },
      { ingredient: data.strIngredient11, measure: data.strMeasure11 },
      { ingredient: data.strIngredient12, measure: data.strMeasure12 },
      { ingredient: data.strIngredient13, measure: data.strMeasure13 },
      { ingredient: data.strIngredient14, measure: data.strMeasure14 },
      { ingredient: data.strIngredient15, measure: data.strMeasure15 },
      { ingredient: data.strIngredient16, measure: data.strMeasure16 },
      { ingredient: data.strIngredient17, measure: data.strMeasure17 },
      { ingredient: data.strIngredient18, measure: data.strMeasure18 },
      { ingredient: data.strIngredient19, measure: data.strMeasure19 },
      { ingredient: data.strIngredient20, measure: data.strMeasure20 },
    ]
      .filter((e) => !!e.ingredient && e.ingredient.trim().length !== 0)
      .map((e) => ({
        ingredient: e.ingredient!,
        measure: e.measure!,
      })),
  }));

const MealListSchema = z.array(MealSchema);

export {
  CategoryListSchema,
  CategoryMealListSchema,
  CategoryMealSchema,
  CategorySchema,
  MealListSchema,
  MealSchema
};

