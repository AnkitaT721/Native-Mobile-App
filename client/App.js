import { AuthProvider } from "./Context/authContext";
import RootNavigation from "./RootNavigation";
import Login from "./Screens/Auth/Login";
import Signup from "./Screens/Auth/Signup";
import HomePage from "./Screens/Home";
import Home from "./Screens/HomePage"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
