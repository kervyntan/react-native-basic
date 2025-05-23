import { Slot, Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

// Renders in preference of index.tsx
const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="about" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
