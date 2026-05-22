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
  RestaurantDetail: { restaurantId: string };
};
