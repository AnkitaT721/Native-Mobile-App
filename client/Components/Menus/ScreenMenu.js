import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Auth/Login";
import Signup from "../../Screens/Auth/Signup";
import Home from "../../Screens/HomePage";
import { AuthContext } from "../../Context/authContext";
import HeaderMenu from "./HeaderMenu";
import Post from "../../Screens/Post";
import Account from "../../Screens/Account";
import MyPosts from "../../Screens/MyPosts";

const ScreenMenu = () => {
  const [state] = useContext(AuthContext);
  const authenticatedUser = state?.user && state?.token;
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticatedUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Native App",
              headerRight: () => <HeaderMenu />,
            }}
          />

          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />

          <Stack.Screen
            name="MyPosts"
            component={MyPosts}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />

          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerBackTitle: "Back",
              headerRight: () => <HeaderMenu />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}

      {/* <Stack.Screen name="Homepage" component={HomePage} /> */}
    </Stack.Navigator>
  );
};

export default ScreenMenu;
