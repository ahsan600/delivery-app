import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { themeColors } from "~/theme/themeColors";
import { CategoryRestaurantsType } from "~/types/restaurants";
import RestaurantCard from "./RestaurantCard";

function Restaurants({ category }: { category: CategoryRestaurantsType }) {
  return (
    <View className="flex-1 gap-4">
      <View className="flex-row justify-between items-center w-full px-3">
        <View className="flex-1">
          <Text className="text-3xl font-bold">{category.name}</Text>
          <Text>{category.description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            className="text-xl font-bold"
            style={{ color: themeColors.bgColor(2) }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: wp(1.5),
          paddingHorizontal: wp(3),
          paddingBottom: hp(3.5),
        }}
      >
        <View className="flex-row gap-4">
          {category.restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} restaurant={restaurant} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default Restaurants;
