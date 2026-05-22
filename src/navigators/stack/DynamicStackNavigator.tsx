import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen";
import { LoginScreen } from "../../screens/LoginScreen";
import { RootStackParamList } from "../../navigation/types";
import DynamicDrawer from "../drawer/DynamicDrawer";
import OrderHistoryScreen from "../../screens/OrderHistoryScreen";
import ReviewScreen from "../../screens/ReviewScreen";
import SettingsScreen from "../../screens/SettingsScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LeftDrawer" component={DynamicDrawer} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
