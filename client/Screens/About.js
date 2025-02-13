import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FooterMenu from "../Components/Menus/FooterMenu";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "flex-end"}}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   margin: 10,
    marginTop: 10,
    justifyContent: "space-between",
  },
});

export default About;
