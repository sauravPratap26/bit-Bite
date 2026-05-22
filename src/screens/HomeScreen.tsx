import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

function HomeScreen() {
  const { logout, user } = useAuth();
  const navigation = useNavigation<HomeNavigationProp>();
  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.homeContent,
          {
            paddingTop: insets.top + 24,
            paddingBottom: insets.bottom + 24,
          },
        ]}
      >
        <Text style={styles.kicker}>Logged in</Text>
        <Text style={styles.heading}>Hi, {user?.name}</Text>
        <Text style={styles.body}>
          Your dummy login is working. Next we can turn this into a restaurant
          dashboard or a customer food browsing screen.
        </Text>
        <Pressable
          accessibilityRole="button"
          onPress={handleLogout}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  homeContent: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  kicker: {
    color: "#E85D04",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  heading: {
    color: "#1F2937",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 12,
  },
  body: {
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  secondaryButton: {
    alignItems: "center",
    alignSelf: "flex-start",
    borderColor: "#E85D04",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 22,
    paddingVertical: 12,
  },
  secondaryPressed: {
    opacity: 0.75,
  },
  secondaryButtonText: {
    color: "#E85D04",
    fontSize: 15,
    fontWeight: "800",
  },
});

export default HomeScreen;
