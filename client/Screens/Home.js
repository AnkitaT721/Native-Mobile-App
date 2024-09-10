import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import mImg from "./mountain.jpg";
import { AuthContext } from "../Context/authContext";
import FooterMenu from "../Components/Menus/FooterMenu";

const HomePage = ({ navigation }) => {
  const [state] = useContext(AuthContext)
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={mImg} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Content Card Title</Text>
          <Text style={styles.cardDescription}>
            This is a description of the content inside the card. It can span
            multiple lines and give a brief overview of the content.
          </Text>
        </View>
      </View>

      <View style={styles.extra}>
        <Text onPress={() => navigation.navigate("Login")}>login</Text>
        <Text onPress={() => navigation.navigate("Signup")}>Signup</Text>
      </View>

      <View>
        <Text>{JSON.stringify(state, null, 4)}</Text>
      </View>

      <FooterMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#062E6F",
  },
  card: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#062E6F",
  },
  cardDescription: {
    fontSize: 14,
    color: "#333333",
  },
  extra: {
    marginTop: 20,
    textAlign: "center",
  }
});

export default HomePage;
