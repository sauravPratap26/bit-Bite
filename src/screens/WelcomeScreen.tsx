import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackParamList } from "../navigation/types";

type WelcomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

const features = [
  {
    title: "Fast order tracking",
    body: "See new, preparing, and completed orders in one calm dashboard.",
  },
  {
    title: "Menu control",
    body: "Update dishes, prices, and availability before the next rush.",
  },
  {
    title: "Restaurant insights",
    body: "Keep an eye on popular items and daily activity at a glance.",
  },
];

const highlightCards = [
  {
    label: "Orders",
    title: "Never miss a table request",
    body: "Follow every order from accepted to ready with quick status checks.",
    accent: "#E85D04",
  },
  {
    label: "Kitchen",
    title: "Keep the rush organized",
    body: "Spot what is cooking, what is delayed, and what needs attention.",
    accent: "#16A34A",
  },
  {
    label: "Menu",
    title: "Update items in moments",
    body: "Mark dishes unavailable, adjust prices, and highlight specials.",
    accent: "#2563EB",
  },
  {
    label: "Guests",
    title: "Understand repeat cravings",
    body: "Notice favorite dishes and keep service personal without extra work.",
    accent: "#9333EA",
  },
];

const timelineItems = [
  "Open the dashboard before service starts.",
  "Watch new orders arrive and move through the kitchen.",
  "Review the day with simple numbers your team can act on.",
];

function WelcomeScreen() {
  const navigation = useNavigation<WelcomeNavigationProp>();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + 24,
            paddingBottom: insets.bottom + 24,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.hero}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Restaurant companion</Text>
          </View>
          <Text style={styles.logo}>bit Bite</Text>
          <Text style={styles.title}>Run your restaurant with less noise.</Text>
          <Text style={styles.subtitle}>
            A simple place for food businesses to manage orders, menus, and
            everyday updates without getting buried in tabs.
          </Text>
        </View>

        <View style={styles.preview}>
          <View style={styles.previewHeader}>
            <View>
              <Text style={styles.previewKicker}>Today</Text>
              <Text style={styles.previewTitle}>Dinner rush</Text>
            </View>
            <Text style={styles.previewPill}>Live</Text>
          </View>

          <View style={styles.metricRow}>
            <View style={styles.metric}>
              <Text style={styles.metricValue}>18</Text>
              <Text style={styles.metricLabel}>Orders</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricValue}>7</Text>
              <Text style={styles.metricLabel}>Preparing</Text>
            </View>
            <View style={styles.metric}>
              <Text style={styles.metricValue}>4.8</Text>
              <Text style={styles.metricLabel}>Rating</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionKicker}>What you can do</Text>
          <Text style={styles.sectionTitle}>A calmer control room for busy teams.</Text>
          <ScrollView
            contentContainerStyle={styles.cardScrollerContent}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardScroller}
          >
            {highlightCards.map((card) => (
              <View key={card.title} style={styles.highlightCard}>
                <View
                  style={[
                    styles.cardAccent,
                    { backgroundColor: card.accent },
                  ]}
                />
                <Text style={styles.cardLabel}>{card.label}</Text>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardBody}>{card.body}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.featureList}>
          {features.map((feature, index) => (
            <View key={feature.title} style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Text style={styles.featureIconText}>{index + 1}</Text>
              </View>
              <View style={styles.featureCopy}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureBody}>{feature.body}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.storyBlock}>
          <Text style={styles.sectionKicker}>Daily flow</Text>
          <Text style={styles.storyTitle}>From prep to closing, bit Bite keeps the important work visible.</Text>
          <View style={styles.timeline}>
            {timelineItems.map((item, index) => (
              <View key={item} style={styles.timelineItem}>
                <View style={styles.timelineDot}>
                  <Text style={styles.timelineNumber}>{index + 1}</Text>
                </View>
                <Text style={styles.timelineText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>



        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate("Login")}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
  },
  hero: {
    marginBottom: 28,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#FDE7D3",
    borderRadius: 8,
    marginBottom: 22,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  badgeText: {
    color: "#9A3412",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  logo: {
    color: "#E85D04",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 18,
  },
  title: {
    color: "#1F2937",
    fontSize: 38,
    fontWeight: "800",
    lineHeight: 44,
    marginBottom: 14,
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 16,
    lineHeight: 24,
  },
  preview: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 24,
    padding: 18,
  },
  previewHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  previewKicker: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  previewTitle: {
    color: "#1F2937",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 4,
  },
  previewPill: {
    backgroundColor: "#DCFCE7",
    borderRadius: 8,
    color: "#166534",
    fontSize: 12,
    fontWeight: "800",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  metricRow: {
    flexDirection: "row",
    gap: 10,
  },
  metric: {
    backgroundColor: "#FFF8F1",
    borderRadius: 8,
    flex: 1,
    padding: 12,
  },
  metricValue: {
    color: "#111827",
    fontSize: 22,
    fontWeight: "800",
  },
  metricLabel: {
    color: "#6B7280",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 3,
  },
  section: {
    marginBottom: 26,
  },
  sectionKicker: {
    color: "#E85D04",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  sectionTitle: {
    color: "#1F2937",
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 28,
    marginBottom: 16,
  },
  cardScroller: {
    marginHorizontal: -24,
  },
  cardScrollerContent: {
    gap: 14,
    paddingHorizontal: 24,
  },
  highlightCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 178,
    padding: 16,
    width: 230,
  },
  cardAccent: {
    borderRadius: 8,
    height: 6,
    marginBottom: 16,
    width: 52,
  },
  cardLabel: {
    color: "#9A3412",
    fontSize: 12,
    fontWeight: "800",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  cardTitle: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
    marginBottom: 8,
  },
  cardBody: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
  },
  featureList: {
    gap: 14,
    marginBottom: 28,
  },
  featureItem: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: 12,
  },
  featureIcon: {
    alignItems: "center",
    backgroundColor: "#E85D04",
    borderRadius: 8,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  featureIconText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  featureCopy: {
    flex: 1,
  },
  featureTitle: {
    color: "#1F2937",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 3,
  },
  featureBody: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 20,
  },
  storyBlock: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 24,
    padding: 18,
  },
  storyTitle: {
    color: "#1F2937",
    fontSize: 20,
    fontWeight: "800",
    lineHeight: 26,
    marginBottom: 18,
  },
  timeline: {
    gap: 14,
  },
  timelineItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  timelineDot: {
    alignItems: "center",
    backgroundColor: "#FFF8F1",
    borderColor: "#F2D7C2",
    borderRadius: 8,
    borderWidth: 1,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  timelineNumber: {
    color: "#E85D04",
    fontSize: 13,
    fontWeight: "800",
  },
  timelineText: {
    color: "#4B5563",
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  callout: {
    backgroundColor: "#1F2937",
    borderRadius: 8,
    marginBottom: 24,
    padding: 18,
  },
  calloutTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 23,
    marginBottom: 8,
  },
  calloutBody: {
    color: "#E5E7EB",
    fontSize: 14,
    lineHeight: 21,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#E85D04",
    borderRadius: 8,
    paddingVertical: 16,
  },
  buttonPressed: {
    opacity: 0.86,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
});
