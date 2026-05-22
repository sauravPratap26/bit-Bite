import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../context/AuthContext";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../navigation/types";

type HomeNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  "HomeList"
>;

function HomeScreen() {
  const { logout, user } = useAuth();
  const navigation = useNavigation<HomeNavigationProp>();
  const handleLogout = () => {
    logout();
    navigation.getParent()?.getParent()?.getParent()?.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.kicker}>Logged in</Text>
        <Text style={styles.heading}>Hi, {user?.name}</Text>
        <Text style={styles.body}>
          Pick a restaurant to view its stack detail screen while the bottom
          swipe tabs remain visible.
        </Text>

        <Pressable
          accessibilityRole="button"
          onPress={() =>
            navigation.navigate("RestaurantDetail", { restaurantId: "123" })
          }
          style={({ pressed }) => [
            styles.restaurantCard,
            pressed && styles.cardPressed,
          ]}
        >
          <View style={styles.cardTopRow}>
            <View>
              <Text style={styles.cardKicker}>Featured restaurant</Text>
              <Text style={styles.cardTitle}>Spice Garden Bistro</Text>
            </View>
            <Text style={styles.rating}>4.8</Text>
          </View>
          <Text style={styles.cardBody}>
            North Indian bowls, grilled snacks, and quick dinner combos ready
            near you.
          </Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaPill}>25-30 min</Text>
            <Text style={styles.metaPill}>Id: 123</Text>
          </View>
        </Pressable>

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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  content: {
    flexGrow: 1,
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
    marginBottom: 22,
  },
  restaurantCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 24,
    padding: 18,
  },
  cardPressed: {
    opacity: 0.86,
  },
  cardTopRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardKicker: {
    color: "#E85D04",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  cardTitle: {
    color: "#1F2937",
    fontSize: 21,
    fontWeight: "800",
  },
  rating: {
    backgroundColor: "#DCFCE7",
    borderRadius: 8,
    color: "#166534",
    fontSize: 13,
    fontWeight: "800",
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  cardBody: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: "row",
    gap: 10,
  },
  metaPill: {
    backgroundColor: "#FFF8F1",
    borderRadius: 8,
    color: "#7C2D12",
    fontSize: 12,
    fontWeight: "800",
    paddingHorizontal: 10,
    paddingVertical: 7,
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
