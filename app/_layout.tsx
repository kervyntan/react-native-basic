import { View, Text, StyleSheet } from "react-native";

const RootLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text> Footer </Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
