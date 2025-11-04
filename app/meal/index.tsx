import CheckboxListTile from "@/components/CheckboxListTile";
import Chip from "@/components/Chip";
import ErrorText from "@/components/ErrorText";
import LoadingModal from "@/components/LoadingModal";
import { colors, sharedStyles } from "@/constants/theme";
import categoriesService from "@/services/category/apiService";
import { Meal } from "@/services/category/model";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    Alert,
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

type MealScreenParams = {
  id: string;
  name: string;
  image?: string;
};

const MealScreen = () => {
  const { id, image } = useLocalSearchParams<MealScreenParams>();
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    setLoading(true);
    setError(null);

    const response = await categoriesService.getMealDetails(id);
    if (response?.message) {
      setError(response.message);
    } else {
      setMeal(response.data);
    }

    setLoading(false);
  };

  const openTutorial = async (tutorial: string) => {
    const canOpen = await Linking.canOpenURL(tutorial);
    if (canOpen) {
      await Linking.openURL(tutorial);
    } else {
      Alert.alert("Error", "Video is not available.");
    }
  };

  return (
    <>
      <ErrorText error={error} text={`Failed to fetch meal details:`} />
      <LoadingModal visible={loading} />
      {meal && (
        <ScrollView>
          <Image resizeMode="cover" source={{ uri: image }} height={250} />
          <View style={styles.container}>
            <View style={styles.chips}>
              <Chip text={meal.category} style={styles.chip} />
              {meal.area && <Chip text={meal.area} style={styles.chip} />}
              <Chip
                text={`${meal.ingredients.length} ingredients`}
                style={styles.chip}
              />
            </View>

            <View style={styles.ingredients}>
              <Text style={{ ...sharedStyles.title, marginBottom: 10 }}>
                Ingredients
              </Text>
              {meal.ingredients.map((element, index) => {
                return (
                  <CheckboxListTile
                    key={element.ingredient + index}
                    text={element.ingredient}
                    trailingText={element.measure}
                    style={{ marginBottom: 6 }}
                  />
                );
              })}
            </View>

            {meal.tutorial && (
              <View style={{ alignItems: "flex-start" }}>
                <Chip
                  text={`Watch a tutorial`}
                  style={{ borderRadius: 100, paddingVertical: 8 }}
                  onPress={() => openTutorial(meal.tutorial!)}
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    size={20}
                    style={{ alignSelf: "center", marginLeft: 10 }}
                  />
                </Chip>
              </View>
            )}

            <Text
              style={{ ...sharedStyles.title, marginTop: 14, marginBottom: 10 }}
            >
              Instructions
            </Text>
            {meal.instructions.map((instruction, index) => (
              <Text style={styles.instructions} key={index}>
                {`\u2022 ${instruction}`}
              </Text>
            ))}

            <Text
              style={{ ...sharedStyles.title, margin: 18, textAlign: "center" }}
            >
              Enjoy your meal!
            </Text>
          </View>
        </ScrollView>
      )}
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
  chips: {
    backgroundColor: colors.background,
    flexDirection: "row",
    marginBottom: 18,
  },
  chip: {
    marginRight: 10,
  },
  ingredients: {
    marginBottom: 14,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default MealScreen;
