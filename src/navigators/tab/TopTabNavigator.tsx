import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileScreen from "../../screens/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import { MainTabParamList } from "../../navigation/types";
import HomeStack from "../stack/HomeStackNavigator";
import CartScreen from "../../screens/CartScreen";

const Tab = createMaterialTopTabNavigator<MainTabParamList>();

function TopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarItemStyle: {
          width: 100,
        },
        tabBarStyle: {
          backgroundColor: "#F2D7C2",
        },
        tabBarActiveTintColor: "#E85D04",
        tabBarInactiveTintColor: "#6B7280",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TopTabs;
