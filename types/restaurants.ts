export type CategoryRestaurantsType = {
  id: string;
  name: string;
  description: string;
  restaurants: RestaurantType[];
};

export type RestaurantType = {
  id: string;
  name: string;
  image: any;
  rating: number;
  reviews: number;
  location: string;
  deliveryTime: string;
  description: string;

  category: string;
};

export type DishType = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: any;
  category: string;
  rating: number;
  calories: number;
  preparationTime: string;
};
