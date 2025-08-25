import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <View>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
