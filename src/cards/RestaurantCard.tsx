import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeStackParamList } from "../navigation/types";
import { restaurantDetails } from "../constants";
import { useState } from "react";

type RestaurantDetailProps = NativeStackScreenProps<
  HomeStackParamList,
  "RestaurantDetail"
>;

const RestaurantCard = ({ route, navigation }: RestaurantDetailProps) => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const { restaurantId } = route.params;

  const restaurant =
    restaurantDetails[restaurantId as keyof typeof restaurantDetails];

  const insets = useSafeAreaInsets();
  const addToCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

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
          <Text style={styles.kicker}>Restaurant Detail</Text>

          <Text style={styles.title}>{restaurant.name}</Text>

          <Text style={styles.subtitle}>Restaurant ID: {restaurantId}</Text>

          <Text style={styles.description}>{restaurant.description}</Text>
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{restaurant.rating}</Text>

            <Text style={styles.infoLabel}>Rating</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{restaurant.deliveryTime}</Text>

            <Text style={styles.infoLabel}>Delivery</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Today</Text>

          <View style={styles.itemsContainer}>
            {restaurant.popularItems.map((item) => {
              const quantity = cart[item.id] || 0;

              return (
                <View key={item.id} style={styles.foodCard}>
                  <View>
                    <Text style={styles.foodTitle}>{item.name}</Text>

                    <Text style={styles.foodPrice}>₹{item.price}</Text>
                  </View>

                  <View style={styles.cartControls}>
                    <Pressable
                      onPress={() => removeFromCart(item.id)}
                      style={styles.cartButton}
                    >
                      <Text style={styles.cartButtonText}>-</Text>
                    </Pressable>

                    <Text style={styles.quantityText}>{quantity}</Text>

                    <Pressable
                      onPress={() => addToCart(item.id)}
                      style={styles.cartButton}
                    >
                      <Text style={styles.cartButtonText}>+</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
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

  sectionBody: {
    color: "#E5E7EB",
    fontSize: 14,
    lineHeight: 21,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "#F2D7C2",
    marginTop: 8,
  },

  sectionTitle: {
    color: "#1F2937",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 18,
  },

  itemsContainer: {
    gap: 16,
  },

  foodCard: {
    backgroundColor: "#FFF8F1",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#F2D7C2",
  },

  foodTitle: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
  },

  foodPrice: {
    color: "#E85D04",
    fontSize: 17,
    fontWeight: "800",
  },

  cartControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  cartButton: {
    backgroundColor: "#E85D04",
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  cartButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  quantityText: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "800",
    marginHorizontal: 18,
  },
});
