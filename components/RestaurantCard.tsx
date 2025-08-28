import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { selectRestaurant } from "~/redux/slice/restaurantSlice";
import { themeColors } from "~/theme/themeColors";
import { RestaurantType } from "~/types/restaurants";

function RestaurantCard({ restaurant }: { restaurant: RestaurantType }) {
  const navigation: any = useNavigation();
  const dispatch = useDispatch();
  const handleSelectRestaurant = (restaurant: RestaurantType) => {
    dispatch(selectRestaurant(restaurant));
    navigation.navigate("Restaurant");
  };
  return (
    <TouchableOpacity
      className="flex-1 rounded-xl gap-2  bg-white"
      onPress={() => handleSelectRestaurant(restaurant)}
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
      <View className="gap-1">
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

        <Text className="text-xl font-bold">{restaurant.name}</Text>
        <View className="flex-row flex-1 gap-1 items-center">
          <Icon.Star width={15} height={15} stroke="gold" fill="gold" />
          <Text className=" text-sm">
            {restaurant.rating} ({restaurant.reviews} reviews) •{" "}
            <Text className=" text-xs font-bold">{restaurant.category}</Text>
          </Text>
        </View>
        <View className="flex-row flex-1 gap-1 items-center">
          <Icon.MapPin width={15} height={15} stroke="grey" />
          <Text className="text-gray-500 text-sm">
            {restaurant.location} • {restaurant.deliveryTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard;
