import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../../screens/WelcomeScreen";
import { LoginScreen } from "../../screens/LoginScreen";
import HomeScreen from "../../screens/HomeScreen";
import { RootStackParamList } from "../../navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
