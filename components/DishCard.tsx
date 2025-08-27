import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { themeColors } from "~/theme/themeColors";
import { DishType } from "~/types/restaurants";
function DishCard({ dish }: { dish: DishType }) {
  return (
    <TouchableOpacity
      className=" rounded-xl shadow-md bg-white mb-3"
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
      <View className="flex-row gap-2">
        <View style={{ width: wp(30), height: wp(30) }}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: wp(5),
              resizeMode: "cover",
            }}
            source={dish.image}
          />
        </View>
        <View>
          <Text>{dish.name}</Text>
          <Text>{dish.description}</Text>
          <Text>{dish.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default DishCard;
