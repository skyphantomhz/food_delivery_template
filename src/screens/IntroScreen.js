import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient";

const IntroScreen = ({ navigation, extraData }) => {
  const { img, title, description, nextScreen } = extraData;
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Image style={{ width: "100%", marginTop: 57 }} source={img} />
        <Text
          style={{
            fontWeight: "700",
            fontSize: 22,
            marginTop: 38,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {title}
        </Text>

        <Text
          style={{
            fontWeight: "400",
            fontSize: 12,
            marginTop: 20,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          {description}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.replace(nextScreen);
          }}
        >
          <LinearGradient
            // Button Linear Gradient
            colors={["#53E886", "#15BE77"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              borderRadius: 16,
              paddingHorizontal: 60,
              paddingVertical: 18,
              marginTop: 42,
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#fff" }}>
              Next
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IntroScreen;
