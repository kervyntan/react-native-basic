import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.img, { marginVertical: 10 }]}
        source={require("../assets/splash-icon.png")}
      />
      <View>
        <Text style={styles.title}> Home </Text>
        <Text> Supermarket App </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}> This is a test card. </Text>
        <Text> Lalalala </Text>
      </View>

      <Link href="/about" style={styles.link}> About </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  img: {
    width: 100,
    height: 100,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
