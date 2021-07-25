import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log("Home Screen");
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 100 }}>Hello</Text>
        <View
          style={{
            width: 100,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "yellow",
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
