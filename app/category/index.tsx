import ErrorText from "@/components/ErrorText";
import LoadingModal from "@/components/LoadingModal";
import TouchableListItem from "@/components/TouchableListItem";
import { colors } from "@/constants/theme";
import categoriesService from "@/services/category/apiService";
import { CategoryMealList } from "@/services/category/model";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

type CategoryScreenParams = {
  id: string;
  title: string;
  description?: string;
  image?: string;
};

const CategoryScreen = () => {
  const { title, description } = useLocalSearchParams<CategoryScreenParams>();
  const router = useRouter();
  const [meals, setMeals] = useState<CategoryMealList>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    setLoading(true);
    setError(null);

    const response = await categoriesService.listMeals(title);
    if (response?.message) {
      setError(response.message);
    } else {
      setMeals(response.data);
    }

    setLoading(false);
  };

  return (
    <>
      <ErrorText error={error} text={`Failed to fetch meals of ${title}:`} />
      <View style={styles.container}>
        <FlatList
          data={meals}
          ListHeaderComponent={
            <Text style={styles.description}>{description}</Text>
          }
          renderItem={({ item: meal, index }) => (
            <TouchableListItem
              key={meal.id}
              title={meal.name}
              charIdentifier={`${index + 1}`}
              image={meal.image}
              onPress={() => {
                console.log(`item ${meal.name} pressed`);
                router.push({
                  pathname: "/meal",
                  params: { ...meal },
                });
              }}
            />
          )}
        />

        <LoadingModal visible={loading} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    paddingBottom: 0,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
    textAlign: "justify",
  },
});

export default CategoryScreen;
