import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Settings">;

function SettingsScreen() {
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
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.body}>
        Account, restaurant, and app preferences can be added here. This page is
        intentionally outside the tab navigator.
      </Text>
    </View>
  );
}

export default SettingsScreen;

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
