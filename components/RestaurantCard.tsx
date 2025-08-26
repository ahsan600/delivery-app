import React from "react";
import { Image, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { themeColors } from "~/theme/themeColors";
import * as Icon from "react-native-feather";
type RestaurantType = {
  id: string;
  name: string;
  image: any;
  rating: number;
  reviews: number;
  location: string;
  deliveryTime: string;
  category: string;
};

function RestaurantCard({ restaurant }: { restaurant: RestaurantType }) {
  return (
    <View
      className="flex-1 rounded-xl gap-2  bg-white"
      style={{
        borderRadius: wp(3),
        padding: wp(2),
        shadowColor: themeColors.bgColor(1),
        shadowOffset: { width: 0, height: hp(0.8) },
        shadowOpacity: 0.25,
        shadowRadius: hp(0.8),
        elevation: 5,
      }}
    >
      <View className="items-center justify-center">
        <Image
          source={restaurant.image}
          style={{
            width: wp(50),
            height: wp(30),
            borderRadius: wp(3),
          }}
          resizeMode="cover"
        />
      </View>

      <Text className="text-xl  font-bold">{restaurant.name}</Text>
      <View className="flex-row flex-1 gap-1 items-center">
        <Icon.Star width={20} height={20} stroke="gold" fill="gold" />
        <Text className=" text-sm">
          {restaurant.rating} ({restaurant.reviews} reviews) •{" "}
          <Text className=" text-xs font-bold">{restaurant.category}</Text>
        </Text>
      </View>
      <View className="flex-row flex-1 gap-1 items-center">
        <Icon.MapPin width={20} height={20} stroke="grey" />
        <Text className="text-gray-500 text-sm">
          {restaurant.location} • {restaurant.deliveryTime}
        </Text>
      </View>
    </View>
  );
}

export default RestaurantCard;
