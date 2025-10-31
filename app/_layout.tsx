import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/theme";

const RootLayout = () => {
  return (
    <>
      <StatusBar
        style="light"
        translucent={false}
        backgroundColor={colors.primary}
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryText,
          contentStyle: {
            padding: 12,
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Recipes" }} />
      </Stack>
    </>
  );
};

export default RootLayout;
