import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as Icon from "react-native-feather";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import DishCard from "~/components/DishCard";
import { dishesData } from "~/dummyData/data";
import { restaurantSelector } from "~/redux/slice/restaurantSlice";
import { themeColors } from "~/theme/themeColors";
function RestaurantScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(restaurantSelector);
  if (!restaurant) return null;
  return (
    <View className="bg-white flex-1">
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
        </View>
      </ScrollView>
      {/* Cart button */}
      <View className="absolute bottom-8 px-2 items-center w-full z-99">
        <TouchableOpacity
          className="flex-1 flex-row justify-between items-center px-5 py-3 rounded-full w-11/12"
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
        >
          <View
            className=" rounded-full items-center justify-center"
            style={{
              width: widthPercentageToDP(12),
              height: widthPercentageToDP(12),
              borderRadius: widthPercentageToDP(100),
              backgroundColor: "rgba(251, 120, 70,1)",
            }}
          >
            <Text className="text-2xl text-white font-bold">2</Text>
          </View>
          <Text className="text-white font-bold text-3xl">View Cart</Text>
          <Text className="font-bold text-2xl text-white">$6</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RestaurantScreen;
