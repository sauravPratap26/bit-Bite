import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { CommonActions } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DrawerParamList, RootStackParamList } from "../../navigation/types";
import { useAuth } from "../../context/AuthContext";
import TopTabs from "../tab/TopTabNavigator";
import randomScreen from "../../screens/randomScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

type RootRouteName = keyof RootStackParamList;

const drawerItems: Array<{ label: string; routeName: RootRouteName }> = [
  { label: "Order History", routeName: "OrderHistory" },
  { label: "Reviews", routeName: "Review" },
  { label: "Settings", routeName: "Settings" },
];

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { logout } = useAuth();

  const openRootScreen = (routeName: RootRouteName) => {
    props.navigation.closeDrawer();
    props.navigation.getParent()?.dispatch(CommonActions.navigate(routeName));
  };

  const handleLogout = () => {
    logout();
    props.navigation.getParent()?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "Login" }],
      }),
    );
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.brandBlock}>
        <Text style={styles.logo}>bit Bite</Text>
        <Text style={styles.subtitle}>Restaurant workspace</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={() => props.navigation.navigate("MainTabs")}
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      >
        <Text style={styles.itemText}>Back to Tabs</Text>
      </Pressable>

      {drawerItems.map((item) => (
        <Pressable
          accessibilityRole="button"
          key={item.routeName}
          onPress={() => openRootScreen(item.routeName)}
          style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
        >
          <Text style={styles.itemText}>{item.label}</Text>
        </Pressable>
      ))}

      <View style={styles.footer}>
        <Pressable
          accessibilityRole="button"
          onPress={handleLogout}
          style={({ pressed }) => [
            styles.logoutButton,
            pressed && styles.itemPressed,
          ]}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

function DynamicDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: "#1F2937",
        headerTitleStyle: styles.headerTitle,
        headerTitle: "",
        drawerStyle: styles.drawer,
      }}
    >
      <Drawer.Screen name="MainTabs" component={TopTabs} />
      <Drawer.Screen name="RandomScreen" component={randomScreen} />
    </Drawer.Navigator>
  );
}

export default DynamicDrawer;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: "#FFF8F1",
  },
  drawerContent: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    backgroundColor: "#FFF8F1",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  brandBlock: {
    borderBottomColor: "#F2D7C2",
    borderBottomWidth: 1,
    marginBottom: 14,
    paddingBottom: 18,
  },
  logo: {
    color: "#E85D04",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "700",
  },
  item: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  itemPressed: {
    backgroundColor: "#FDE7D3",
  },
  itemText: {
    color: "#1F2937",
    fontSize: 15,
    fontWeight: "800",
  },
  footer: {
    borderTopColor: "#F2D7C2",
    borderTopWidth: 1,
    marginTop: "auto",
    paddingTop: 14,
  },
  logoutButton: {
    borderColor: "#E85D04",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  logoutText: {
    color: "#E85D04",
    fontSize: 15,
    fontWeight: "800",
  },
});
