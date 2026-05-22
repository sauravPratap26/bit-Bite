import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const FoodItemCard = (item: any) => {
  const [cart, setCart] = useState<Record<string, number>>({});

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

        <Pressable onPress={() => addToCart(item.id)} style={styles.cartButton}>
          <Text style={styles.cartButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({
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
