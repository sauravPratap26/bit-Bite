import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/AuthContext";
import AppStack from "./src/navigators/stack/DynamicStackNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar style="light" />
          <AppStack />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
