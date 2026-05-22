export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  LeftDrawer: undefined;
  OrderHistory: undefined;
  Review: undefined;
  Settings: undefined;
};

export type DrawerParamList = {
  MainTabs: undefined;
  RestaurantDetail: { restaurantId: string };
  RandomScreen: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  HomeList: undefined;
};

export type MainStackParamList = {
  Tabs: undefined;

  RestaurantDetail: {
    restaurantId: string;
  };
};
