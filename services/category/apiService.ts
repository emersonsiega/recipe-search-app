import axios, { AxiosError } from "axios";
import z from "zod";
import { ApiResponse } from "../models";
import { CategoryList, CategoryMealList, Meal } from "./model";
import {
  CategoryListSchema,
  CategoryMealListSchema,
  MealListSchema,
} from "./schema";

const token = "1";
const baseUrl = `https://www.themealdb.com/api/json/v1/${token}`;
const categoryUrl = `${baseUrl}/categories.php`;
const categoryMealsUrl = `${baseUrl}/filter.php?c=`;
const mealByIdUrl = `${baseUrl}/lookup.php?i=`;

const apiService = {
  listAll: async (): Promise<ApiResponse<CategoryList>> => {
    try {
      const response = await axios.get(categoryUrl);

      const data = CategoryListSchema.parse(response.data["categories"]);
      data.sort((itemA, itemB) => {
        const a = itemA.name.at(0) ?? "";
        const b = itemB.name.at(0) ?? "";

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      return { data, statusCode: response.status };
    } catch (error) {
      return handleError(error);
    }
  },

  listMeals: async (
    category: string
  ): Promise<ApiResponse<CategoryMealList>> => {
    try {
      const response = await axios.get(`${categoryMealsUrl}${category}`);

      const data = CategoryMealListSchema.parse(response.data["meals"]);
      data.sort((itemA, itemB) => {
        const a = itemA.name.at(0) ?? "";
        const b = itemB.name.at(0) ?? "";

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      return { data, statusCode: response.status };
    } catch (error) {
      return handleError(error);
    }
  },

  getMealDetails: async (mealId: string): Promise<ApiResponse<Meal | null>> => {
    try {
      const response = await axios.get(`${mealByIdUrl}${mealId}`);

      const data = MealListSchema.parse(response.data["meals"]);
      return {
        data: data.length === 0 ? null : data[0],
        statusCode: response.status,
      };
    } catch (error) {
      return handleError(error);
    }
  },
};

const handleError = <T>(error: unknown): ApiResponse<T> => {
  if (error instanceof z.ZodError) {
    return {
      data: <T>[],
      message: `Parsing response error: ${error.message}`,
    };
  }

  if (error instanceof AxiosError) {
    return {
      data: <T>[],
      statusCode: error.code ? Number.parseInt(error.code ?? "500") : undefined,
      message: error.message,
    };
  }

  return { data: <T>[], message: "Unexpected error!" };
};

export default apiService;
