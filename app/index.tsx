import CategoriesList from "@/components/category/CategoriesList";
import { colors, sharedStyles } from "@/constants/theme";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const insets = useSafeAreaInsets();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: "Search by recipe name",
        headerIconColor: colors.primaryText,
        textColor: colors.primaryText,
        hintTextColor: colors.primaryText,
        tintColor: colors.primaryText,
        shouldShowHintSearchIcon: false,
        onChangeText: setSearch,
        onSearchButtonPress: () => {
          // TODO: implement search feature
          console.log("searching...");
        },
        onCancelButtonPress: () => {
          setSearch("");
        },
      },
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        bottom: 0,
      }}
    >
      <Text style={{ ...sharedStyles.title, marginBottom: 14 }}>
        Categories
      </Text>
      <CategoriesList />
    </SafeAreaView>
  );
};

export default HomeScreen;
