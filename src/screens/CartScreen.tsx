import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useCart } from "../context/CartContext";
import { restaurantDetails } from "../constants";

const CartScreen = () => {
  const insets = useSafeAreaInsets();

  const { cart, addToCart, removeFromCart } = useCart();

  const cartItems = Object.entries(cart)
    .filter(([, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => {
      for (const [restaurantId, restaurant] of Object.entries(
        restaurantDetails,
      )) {
        const item = restaurant.popularItems.find((food) => food.id === itemId);

        if (item) {
          return {
            restaurantId,
            restaurantName: restaurant.name,
            item,
            quantity,
          };
        }
      }

      return null;
    })
    .filter(Boolean);

  const total = cartItems.reduce((acc, current) => {
    if (!current) return acc;

    return acc + current.item.price * current.quantity;
  }, 0);

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
        <Text style={styles.heading}>Your Cart</Text>

        <Text style={styles.subHeading}>Delicious items ready to order 🍽️</Text>

        {cartItems.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>Cart is empty</Text>

            <Text style={styles.emptyBody}>
              Add some tasty food items from restaurants.
            </Text>
          </View>
        ) : (
          <>
            {cartItems.map((cartItem) => {
              if (!cartItem) return null;

              const { item, quantity, restaurantName } = cartItem;

              return (
                <View key={item.id} style={styles.cartCard}>
                  <View style={styles.cardTop}>
                    <View>
                      <Text style={styles.foodTitle}>{item.name}</Text>

                      <Text style={styles.restaurantName}>
                        {restaurantName}
                      </Text>
                    </View>

                    <Text style={styles.price}>₹{item.price}</Text>
                  </View>

                  <View style={styles.bottomRow}>
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

                    <Text style={styles.totalPrice}>
                      ₹{item.price * quantity}
                    </Text>
                  </View>
                </View>
              );
            })}

            <View style={styles.summaryCard}>
              <Text style={styles.summaryText}>Total Amount</Text>

              <Text style={styles.summaryAmount}>₹{total}</Text>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

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
    marginBottom: 24,
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 24,
    borderWidth: 1,
    borderColor: "#F2D7C2",
    alignItems: "center",
  },

  emptyTitle: {
    color: "#1F2937",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
  },

  emptyBody: {
    color: "#6B7280",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 22,
  },

  cartCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: "#F2D7C2",
    marginBottom: 16,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 18,
  },

  foodTitle: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 6,
  },

  restaurantName: {
    color: "#E85D04",
    fontSize: 13,
    fontWeight: "700",
  },

  price: {
    color: "#1F2937",
    fontSize: 18,
    fontWeight: "800",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cartControls: {
    flexDirection: "row",
    alignItems: "center",
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

  totalPrice: {
    color: "#E85D04",
    fontSize: 18,
    fontWeight: "800",
  },

  summaryCard: {
    backgroundColor: "#1F2937",
    borderRadius: 20,
    padding: 22,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  summaryAmount: {
    color: "#FCD34D",
    fontSize: 26,
    fontWeight: "800",
  },
});
