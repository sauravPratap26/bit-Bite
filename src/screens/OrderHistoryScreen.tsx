import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "OrderHistory"
>;

function OrderHistoryScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={[
        styles.screen,
        { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
      ]}
    >
      <Pressable
        accessibilityRole="button"
        onPress={navigation.goBack}
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      <Text style={styles.kicker}>Drawer page</Text>
      <Text style={styles.title}>Order History</Text>
      <Text style={styles.body}>
        This will be dynamic later on, but for now it shows that the drawer can
        open a full-screen stack page with no tabs.
      </Text>
    </View>
  );
}

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF8F1",
    paddingHorizontal: 24,
  },
  backButton: {
    alignSelf: "flex-start",
    borderColor: "#E85D04",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 36,
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  backText: {
    color: "#E85D04",
    fontSize: 14,
    fontWeight: "800",
  },
  kicker: {
    color: "#E85D04",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  title: {
    color: "#1F2937",
    fontSize: 34,
    fontWeight: "800",
    marginBottom: 12,
  },
  body: {
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
  },
});
