import axios, { AxiosError } from "axios";
import z from "zod";
import { ApiResponse } from "../models";
import { CategoryList } from "./model";
import { CategoryListSchema } from "./schema";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

const categoriesService = {
  listAll: async (): Promise<ApiResponse<CategoryList>> => {
    try {
      const response = await axios.get(baseUrl);
      debugger;

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
      debugger;
      if (error instanceof z.ZodError) {
        return {
          data: [],
          message: `Parsing response error: ${error.message}`,
        };
      }

      if (error instanceof AxiosError) {
        return {
          data: [],
          statusCode: error.code
            ? Number.parseInt(error.code ?? "500")
            : undefined,
          message: error.message,
        };
      }

      return { data: [], message: "Unexpected error!" };
    }
  },
};

export default categoriesService;
