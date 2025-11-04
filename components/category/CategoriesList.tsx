import categoriesService from "@/services/category/apiService";
import { CategoryList } from "@/services/category/model";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import ErrorText from "../ErrorText";
import LoadingModal from "../LoadingModal";
import TouchableListItem from "../TouchableListItem";

const CategoriesList = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryList>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);

    const response = await categoriesService.listAll();
    if (response?.message) {
      setError(response.message);
    } else {
      setCategories(response.data);
    }

    setLoading(false);
  };

  return (
    <>
      <ErrorText error={error} text="Failed to fetch categories:" />
      <FlatList
        data={categories}
        renderItem={({ item: category, index }) => (
          <TouchableListItem
            key={category.id}
            title={category.name}
            charIdentifier={category.name.at(0)!.toUpperCase()}
            image={category.image}
            subtitle={category.description}
            onPress={() => {
              console.log(`item ${category.name} pressed`);
              router.push({
                pathname: "/category",
                params: {
                  id: category.id,
                  title: category.name,
                  description: category.description,
                  image: category.image,
                },
              });
            }}
            style={
              index === categories.length - 1 ? { marginBottom: 48 } : undefined
            }
          />
        )}
      />
      <LoadingModal visible={loading} />
    </>
  );
};

export default CategoriesList;
