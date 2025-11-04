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
    strIngredient1: z.string().nullish(),
    strIngredient2: z.string().nullish(),
    strIngredient3: z.string().nullish(),
    strIngredient4: z.string().nullish(),
    strIngredient5: z.string().nullish(),
    strIngredient6: z.string().nullish(),
    strIngredient7: z.string().nullish(),
    strIngredient8: z.string().nullish(),
    strIngredient9: z.string().nullish(),
    strIngredient10: z.string().nullish(),
    strIngredient11: z.string().nullish(),
    strIngredient12: z.string().nullish(),
    strIngredient13: z.string().nullish(),
    strIngredient14: z.string().nullish(),
    strIngredient15: z.string().nullish(),
    strIngredient16: z.string().nullish(),
    strIngredient17: z.string().nullish(),
    strIngredient18: z.string().nullish(),
    strIngredient19: z.string().nullish(),
    strIngredient20: z.string().nullish(),
    strMeasure1: z.string().nullish(),
    strMeasure2: z.string().nullish(),
    strMeasure3: z.string().nullish(),
    strMeasure4: z.string().nullish(),
    strMeasure5: z.string().nullish(),
    strMeasure6: z.string().nullish(),
    strMeasure7: z.string().nullish(),
    strMeasure8: z.string().nullish(),
    strMeasure9: z.string().nullish(),
    strMeasure10: z.string().nullish(),
    strMeasure11: z.string().nullish(),
    strMeasure12: z.string().nullish(),
    strMeasure13: z.string().nullish(),
    strMeasure14: z.string().nullish(),
    strMeasure15: z.string().nullish(),
    strMeasure16: z.string().nullish(),
    strMeasure17: z.string().nullish(),
    strMeasure18: z.string().nullish(),
    strMeasure19: z.string().nullish(),
    strMeasure20: z.string().nullish(),
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

