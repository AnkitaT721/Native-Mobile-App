import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const FooterMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5 name="home" style={styles.iconStyle} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="plus-square" style={styles.iconStyle} />
        <Text>Post</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="list" style={styles.iconStyle} />
        <Text>My Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user" style={styles.iconStyle} />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 18,
  },
});

export default FooterMenu;
