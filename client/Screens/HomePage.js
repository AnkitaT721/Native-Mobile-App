import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AuthContext } from "../Context/authContext";
import FooterMenu from "../Components/Menus/FooterMenu";

const HomePage = () => {
  //global state
  const [state] = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(state, null, 4)}</Text>
      <View style={{ backgroundColor: "#ffffff" }}>
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

export default HomePage;
