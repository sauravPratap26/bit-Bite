export const restaurants = [
  {
    id: "101",
    name: "Spice Garden Bistro",
    category: "North Indian & Grills",
    description:
      "North Indian bowls, grilled snacks, and quick dinner combos ready near you.",
    rating: 4.8,
    deliveryTime: "25-30 min",
  },
  {
    id: "102",
    name: "Ocean Wok",
    category: "Chinese & Thai",
    description:
      "Hot noodles, fried rice, and spicy Thai curries delivered fresh.",
    rating: 4.6,
    deliveryTime: "20-25 min",
  },
  {
    id: "103",
    name: "Burger District",
    category: "Burgers & Fries",
    description:
      "Loaded burgers, crispy fries, and cheesy sides for your cravings.",
    rating: 4.7,
    deliveryTime: "15-20 min",
  },
  {
    id: "104",
    name: "Green Bowl Cafe",
    category: "Healthy Meals",
    description: "Protein bowls, salads, smoothies, and healthy quick bites.",
    rating: 4.5,
    deliveryTime: "30-35 min",
  },
];

export const restaurantDetails = {
  "101": {
    name: "Spice Garden Bistro",
    rating: 4.8,
    deliveryTime: "25m",
    description:
      "Authentic North Indian bowls, grilled platters, and rich dinner combos.",
    popularItems: [
      {
        id: "101-1",
        name: "Paneer Tikka Bowl",
        price: 249,
      },
      {
        id: "101-2",
        name: "Butter Chicken Combo",
        price: 329,
      },
      {
        id: "101-3",
        name: "Masala Fries",
        price: 149,
      },
    ],
  },

  "102": {
    name: "Ocean Wok",
    rating: 4.6,
    deliveryTime: "20m",
    description:
      "Fresh noodles, spicy Thai curries, and sizzling Asian street food.",
    popularItems: [
      {
        id: "102-1",
        name: "Chicken Hakka Noodles",
        price: 299,
      },
      {
        id: "102-2",
        name: "Thai Green Curry",
        price: 349,
      },
      {
        id: "102-3",
        name: "Crispy Spring Rolls",
        price: 199,
      },
      {
        id: "102-4",
        name: "Chilli Paneer",
        price: 279,
      },
    ],
  },

  "103": {
    name: "Burger District",
    rating: 4.7,
    deliveryTime: "18m",
    description:
      "Loaded burgers, cheesy fries, crispy chicken, and signature sauces.",
    popularItems: [
      {
        id: "103-1",
        name: "Double Cheese Burger",
        price: 199,
      },
      {
        id: "103-2",
        name: "Loaded Fries",
        price: 149,
      },
      {
        id: "103-3",
        name: "Chicken Popcorn",
        price: 179,
      },
      {
        id: "103-4",
        name: "Cold Coffee",
        price: 129,
      },
    ],
  },

  "104": {
    name: "Green Bowl Cafe",
    rating: 4.5,
    deliveryTime: "30m",
    description:
      "Healthy salads, smoothie bowls, wraps, and protein-packed meals.",
    popularItems: [
      {
        id: "104-1",
        name: "Protein Bowl",
        price: 299,
      },
      {
        id: "104-2",
        name: "Avocado Toast",
        price: 199,
      },
      {
        id: "104-3",
        name: "Berry Smoothie",
        price: 149,
      },
      {
        id: "104-4",
        name: "Caesar Salad",
        price: 179,
      },
    ],
  },
} as const;
