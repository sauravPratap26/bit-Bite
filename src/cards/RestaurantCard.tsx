import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStackParamList } from "../navigation/types";

type RestaurantDetailProps = NativeStackScreenProps<
  HomeStackParamList,
  "RestaurantDetail"
>;

const RestaurantCard = ({ route, navigation }: RestaurantDetailProps) => {
  const { restaurantId } = route.params;
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          accessibilityRole="button"
          onPress={navigation.goBack}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>

        <View style={styles.heroCard}>
          <Text style={styles.kicker}>Restaurant detail</Text>
          <Text style={styles.title}>Spice Garden Bistro</Text>
          <Text style={styles.subtitle}>
            Restaurant ID: {restaurantId}
          </Text>
          <Text style={styles.description}>
            This screen is pushed inside the Home tab stack, so your swipeable
            bottom tabs stay visible while the restaurant detail opens.
          </Text>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>4.8</Text>
            <Text style={styles.infoLabel}>Rating</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>25m</Text>
            <Text style={styles.infoLabel}>Delivery</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular today</Text>
          <Text style={styles.sectionBody}>
            Paneer tikka bowl, butter chicken combo, masala fries, and mango
            cooler.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  backButton: {
    alignSelf: "flex-start",
    borderColor: "#E85D04",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  backButtonText: {
    color: "#E85D04",
    fontSize: 14,
    fontWeight: "800",
  },
  heroCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 18,
    padding: 20,
  },
  kicker: {
    color: "#E85D04",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  title: {
    color: "#1F2937",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
    marginBottom: 8,
  },
  subtitle: {
    color: "#7C2D12",
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 16,
  },
  description: {
    color: "#6B7280",
    fontSize: 15,
    lineHeight: 22,
  },
  infoGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 18,
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 16,
  },
  infoValue: {
    color: "#1F2937",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 4,
  },
  infoLabel: {
    color: "#6B7280",
    fontSize: 13,
    fontWeight: "700",
  },
  section: {
    backgroundColor: "#1F2937",
    borderRadius: 8,
    padding: 18,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
  },
  sectionBody: {
    color: "#E5E7EB",
    fontSize: 14,
    lineHeight: 21,
  },
});
