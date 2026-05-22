import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/context/AuthContext";
import AppStack from "./src/navigators/stack/DynamicStackNavigator";
import { CardProvider } from "./src/context/CartContext";
import { LinkingOptions } from "@react-navigation/native";

const linking: LinkingOptions<any> = {
  prefixes: ["foodapp://"],

  config: {
    screens: {
      LeftDrawer: {
        path: "",

        screens: {
          RestaurantDetail: "restaurant/:restaurantId",
        },
      },
    },
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <AuthProvider>
          <CardProvider>
            <StatusBar style="light" />

            <AppStack />
          </CardProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
