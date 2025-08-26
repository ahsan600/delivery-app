import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { categories } from "~/dummyData/data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
function Categories() {
  const [selectCategory, setSelectCategory] = useState<number>();
  const handleSelectCategory = (category: number) => {
    setSelectCategory(category);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: wp(2.5),
        paddingHorizontal: wp(3),
        paddingBottom: hp(2),
      }}
    >
      <View className="flex-1 items-center gap-3 flex-row">
        {categories.map((category) => {
          const selectCategoryColor =
            category.id === selectCategory ? "bg-gray-800" : "bg-gray-200";
          return (
            <TouchableOpacity
              onPress={() => handleSelectCategory(category.id)}
              className="items-center"
              key={category.id}
            >
              <View className={`p-3 ${selectCategoryColor} rounded-full`}>
                <Image
                  source={category.image}
                  style={{
                    width: wp(10),
                    height: wp(10),
                    borderRadius: wp(6),
                  }}
                  resizeMode="cover"
                />
              </View>

              <Text>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default Categories;
