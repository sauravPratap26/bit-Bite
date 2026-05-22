import React, { useMemo, useState } from "react";

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DrawerParamList } from "../navigation/types";
import { useCart } from "../context/CartContext";
import { restaurantDetails } from "../constants";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type HomeNavigationProp = DrawerNavigationProp<DrawerParamList, "MainTabs">;

const SearchScreen = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const { cart, addToCart, removeFromCart } = useCart();
  const results = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    const matchedResults: any[] = [];

    Object.entries(restaurantDetails).forEach(([restaurantId, restaurant]) => {
      if (restaurant.name.toLowerCase().includes(query)) {
        matchedResults.push({
          type: "restaurant",
          restaurantId,
          restaurant,
        });
      }

      restaurant.popularItems.forEach((item) => {
        const combined = `${item.name} ${restaurant.name}`.toLowerCase();

        if (combined.includes(query)) {
          matchedResults.push({
            type: "food",
            restaurantId,
            restaurant,
            item,
          });
        }
      });
    });

    return matchedResults;
  }, [search]);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Search</Text>

        <Text style={styles.subHeading}>Find restaurants or food items 🍜</Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search food or restaurants..."
          placeholderTextColor="#9CA3AF"
          style={styles.input}
        />

        <View style={styles.resultsContainer}>
          {results.map((result, index) => {
            if (result.type === "restaurant") {
              return (
                <Pressable
                  key={`${result.restaurantId}-${index}`}
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurantId: result.restaurantId,
                    })
                  }
                  style={({ pressed }) => [
                    styles.restaurantCard,
                    pressed && {
                      opacity: 0.8,
                    },
                  ]}
                >
                  <Text style={styles.restaurantTitle}>
                    {result.restaurant.name}
                  </Text>

                  <Text style={styles.restaurantDescription}>
                    {result.restaurant.description}
                  </Text>

                  <View style={styles.metaRow}>
                    <Text style={styles.metaPill}>
                      ⭐ {result.restaurant.rating}
                    </Text>

                    <Text style={styles.metaPill}>
                      🚚 {result.restaurant.deliveryTime}
                    </Text>
                  </View>
                </Pressable>
              );
            }

            const quantity = cart[result.item.id] || 0;

            return (
              <View key={`${result.item.id}-${index}`} style={styles.foodCard}>
                <View>
                  <Text style={styles.foodTitle}>{result.item.name}</Text>

                  <Text style={styles.foodRestaurant}>
                    {result.restaurant.name}
                  </Text>

                  <Text style={styles.foodPrice}>₹{result.item.price}</Text>
                </View>

                <View style={styles.cartControls}>
                  <Pressable
                    onPress={() => removeFromCart(result.item.id)}
                    style={styles.cartButton}
                  >
                    <Text style={styles.cartButtonText}>-</Text>
                  </Pressable>

                  <Text style={styles.quantityText}>{quantity}</Text>

                  <Pressable
                    onPress={() => addToCart(result.item.id)}
                    style={styles.cartButton}
                  >
                    <Text style={styles.cartButtonText}>+</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },

  content: {
    paddingHorizontal: 20,
  },

  heading: {
    color: "#1F2937",
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 8,
  },

  subHeading: {
    color: "#6B7280",
    fontSize: 15,
    marginBottom: 22,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#F2D7C2",
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 16,
    color: "#1F2937",
    marginBottom: 22,
  },

  resultsContainer: {
    gap: 16,
  },

  restaurantCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#F2D7C2",
  },

  restaurantTitle: {
    color: "#1F2937",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 8,
  },

  restaurantDescription: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 14,
  },

  metaRow: {
    flexDirection: "row",
    gap: 10,
  },

  metaPill: {
    backgroundColor: "#FFF8F1",
    color: "#E85D04",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    fontWeight: "700",
  },

  foodCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#F2D7C2",
  },

  foodTitle: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
  },

  foodRestaurant: {
    color: "#6B7280",
    fontSize: 14,
    marginBottom: 10,
  },

  foodPrice: {
    color: "#E85D04",
    fontSize: 18,
    fontWeight: "800",
  },

  cartControls: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },

  cartButton: {
    backgroundColor: "#E85D04",
    width: 38,
    height: 38,
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
