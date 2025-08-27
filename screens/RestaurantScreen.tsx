import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import DishCard from "~/components/DishCard";
import { dishesData } from "~/dummyData/data";
import { themeColors } from "~/theme/themeColors";
import { RestaurantType } from "~/types/restaurants";
function RestaurantScreen() {
  const { params } = useRoute() as any;
  const navigation = useNavigation();

  if (!params) return null;
  const restaurant: RestaurantType = params.restaurant;
  return (
    <ScrollView
      className="flex-1"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{
        marginBottom: heightPercentageToDP(4),
        backgroundColor: "white",
      }}
    >
      <StatusBar style="auto" />
      {/* Image Section */}
      <View className="relative">
        <Image
          style={{
            width: "100%",
            height: heightPercentageToDP(35),
            resizeMode: "cover",
          }}
          source={restaurant.image}
        />

        <View
          className="absolute "
          style={{
            top: heightPercentageToDP(7),
            left: widthPercentageToDP(4),
          }}
        >
          <TouchableOpacity
            className="rounded-full p-2"
            style={{
              backgroundColor: themeColors.bgColor(4),
            }}
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft width={25} height={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Restaurant Details Section */}
      <View
        className="flex-1 bg-white -mt-28 pt-6"
        style={{
          borderTopRightRadius: widthPercentageToDP(12),
          borderTopLeftRadius: widthPercentageToDP(12),
        }}
      >
        <View className="px-6">
          <View className="mb-2">
            <Text
              className="font-bold "
              style={{
                fontSize: widthPercentageToDP(7),
                marginBottom: heightPercentageToDP(0.8),
              }}
            >
              {restaurant.name}
            </Text>
            <Text
              style={{
                fontSize: widthPercentageToDP(3.7),
              }}
            >
              {restaurant.description}
            </Text>
          </View>
          <View
            className="gap-1"
            style={{
              marginBottom: heightPercentageToDP(2),
            }}
          >
            <View className="flex-row items-center gap-1 ">
              <Icon.Star width={15} height={15} stroke="gold" fill="gold" />
              <Text
                style={{
                  fontSize: widthPercentageToDP(3.3),
                }}
              >
                {restaurant.rating} ({restaurant.reviews}) Reviews
              </Text>
              <Text>•</Text>
              <Text
                style={{
                  fontSize: widthPercentageToDP(3.3),
                }}
              >
                {restaurant.category}
              </Text>
            </View>
            <View className="flex-row items-center gap-1 text-xs">
              <Icon.MapPin width={15} height={15} stroke="grey" />
              <Text
                style={{
                  fontSize: widthPercentageToDP(3.3),
                }}
              >
                Nearby
              </Text>
              <Text>•</Text>
              <Text
                style={{
                  fontSize: widthPercentageToDP(3.3),
                }}
              >
                {restaurant.location}
              </Text>
            </View>
          </View>
        </View>

        {/* Menu Section */}
        <View className="flex-1 px-6">
          <View className="mb-2">
            <Text
              className="font-bold"
              style={{
                fontSize: widthPercentageToDP(7),
                marginBottom: heightPercentageToDP(0.8),
              }}
            >
              Menu
            </Text>
          </View>
          <View className="flex-1 gap-4">
            {dishesData?.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default RestaurantScreen;
