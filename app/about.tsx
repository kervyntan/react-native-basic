import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View>
      <Text> About </Text>
      <Link href="/" style={styles.link}>
        Back Home
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
