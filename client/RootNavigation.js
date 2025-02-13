import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./Context/authContext";
import ScreenMenu from "./Components/Menus/ScreenMenu";
import Post from "./Screens/Post";
import { PostProvider } from "./Context/postContext";

const RootNavigation = () => {
  return (
    <AuthProvider>
      <PostProvider>
        <ScreenMenu />
      </PostProvider>
    </AuthProvider>
  );
};

export default RootNavigation;
