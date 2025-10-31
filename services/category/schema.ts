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

export { CategoryListSchema, CategorySchema };
