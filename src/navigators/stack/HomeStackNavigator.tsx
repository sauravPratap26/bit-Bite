import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantCard from "../../cards/RestaurantCard";
import { HomeStackParamList } from "../../navigation/types";
import HomeScreen from "../../screens/HomeScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeList" component={HomeScreen} />
      {/* <Stack.Screen name="RestaurantDetail" component={RestaurantCard} /> */}
    </Stack.Navigator>
  );
}

export default HomeStack;
