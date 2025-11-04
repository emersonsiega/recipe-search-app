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
        <Stack.Screen
          name="category"
          options={({ route }) => ({
            title: (route.params as { title?: string })?.title ?? "Category",
          })}
        />
        <Stack.Screen
          name="meal"
          options={({ route }) => ({
            title: (route.params as { name?: string })?.name ?? "Meal",
            contentStyle: { padding: 0 },
          })}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
