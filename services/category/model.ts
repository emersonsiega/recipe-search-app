import z from "zod";
import { CategoryListSchema, CategorySchema } from "./schema";

type Category = z.infer<typeof CategorySchema>;

type CategoryList = z.infer<typeof CategoryListSchema>;

export { Category, CategoryList };
