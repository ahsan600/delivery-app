import React from "react";
import { Image, Text, View } from "react-native";
import * as Icon from "react-native-feather";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { themeColors } from "~/theme/themeColors";
import { DishType } from "~/types/restaurants";

function DishCard({ dish }: { dish: DishType }) {
  return (
    <View
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
        <View className="flex-1 gap-3">
          <Text className="text-xl font-bold">{dish.name}</Text>
          <Text className="">{dish.description}</Text>
          <View className="flex-row justify-between items-end flex-1">
            <Text className="text-xl font-bold">$ {dish.price}</Text>
            <View className="flex-row items-center">
              <Icon.Minus
                style={{
                  backgroundColor: themeColors.bgColor(2),
                  borderRadius: 50,
                  padding: widthPercentageToDP(3.5),
                }}
                width={15}
                height={15}
                stroke="white"
              />
              <Text className="text-xl mx-3">0</Text>
              <Icon.Plus
                style={{
                  backgroundColor: themeColors.bgColor(2),
                  borderRadius: 50,
                  padding: widthPercentageToDP(3.5),
                }}
                width={15}
                height={15}
                stroke="white"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default DishCard;
