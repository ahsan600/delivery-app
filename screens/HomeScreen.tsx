import React from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { themeColors } from "~/theme/themeColors";
import Categories from "~/components/Categories";
import Restaurants from "~/components/Restaurants";
import { restaurantsWithCategories } from "~/dummyData/data";

function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="auto" />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: wp(3),
          paddingBottom: hp(0.4),
        }}
      >
        {/* Search Bar */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: wp(6),
            paddingHorizontal: wp(3.5),
            paddingVertical: hp(1.8),
          }}
        >
          <Icon.Search
            height={hp(2.2)}
            width={wp(5)}
            stroke="grey"
            color={themeColors.black}
          />
          <TextInput
            style={{
              flex: 1,
              marginLeft: wp(2),
              fontSize: wp(3.8),
            }}
            placeholder="Restaurants"
            placeholderTextColor="grey"
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderLeftWidth: 1,
              borderColor: "#ddd",
              marginLeft: wp(2),
              paddingLeft: wp(2),
            }}
          >
            <Icon.MapPin width={wp(5)} height={hp(2.5)} stroke="grey" />
            <Text style={{ fontSize: wp(3.2), marginLeft: wp(1) }}>
              New York, NYC
            </Text>
          </View>
        </View>

        {/* Filter Button */}
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            padding: wp(3),
            borderRadius: wp(10),
            marginLeft: wp(2),
          }}
        >
          <Icon.Sliders width={wp(6)} height={wp(6)} stroke="white" />
        </TouchableOpacity>
      </View>

      {/* Main */}
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: hp(2),
        }}
      >
        {/* Categories */}
        <Categories />

        {/* Restaurants */}

        {restaurantsWithCategories.map((category, index) => (
          <Restaurants key={index} category={category} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
