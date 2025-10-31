import { colors, sharedStyles } from "@/constants/theme";
import categoriesService from "@/services/category/categoriesService";
import { CategoryList } from "@/services/category/model";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import LoadingModal from "../LoadingModal";
import TouchableListItem from "../TouchableListItem";

const CategoriesList = () => {
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
      {error && (
        <>
          <Text
            style={{
              ...sharedStyles.title,
              marginTop: 14,
              color: colors.errorFeedback,
            }}
          >
            Failed to fetch categories:
          </Text>
          <Text style={styles.errorText}>{error}</Text>
        </>
      )}
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

const styles = StyleSheet.create({
  errorText: {
    fontSize: 16,
    color: colors.errorFeedback,
  },
});

export default CategoriesList;
