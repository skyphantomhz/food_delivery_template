import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { textDecorationColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const LoginScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [icon, setIcon] = useState("eye-with-line");
  return (
    <LinearGradient
      colors={["#FFFFFF", "#F4F4F4"]}
      start={{ x: 0.5, y: 0.5 }}
      style={{
        flex: 1,
      }}
    >
      <View>
        <Image
          style={{ position: "absolute", top: 0, left: 0, right: 8 }}
          source={require("../../assets/img/img_logo_gradient.png")}
        />
        <SafeAreaView>
          <View>
            <Image
              style={{ marginTop: 37, alignSelf: "center" }}
              source={require("../../assets/img/img_logo_and_text.png")}
            />
          </View>
        </SafeAreaView>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            fontWeight: "700",
            marginTop: 60,
          }}
        >
          Login To Your Account
        </Text>
        <TextInput
          style={{
            marginHorizontal: 24,
            paddingVertical: 22,
            paddingHorizontal: 28,
            backgroundColor: "white",
            borderRadius: 16,
            borderWidth: 1,
            marginTop: 40,
            borderColor: "#F4F4F4",
          }}
          placeholder="Email"
        />

        <View
          style={{
            marginHorizontal: 24,
            paddingVertical: 22,
            paddingHorizontal: 28,
            backgroundColor: "white",
            borderRadius: 16,
            borderWidth: 1,
            justifyContent: "center",
            marginTop: 12,
            borderColor: "#F4F4F4",
          }}
        >
          <TextInput placeholder="Password" secureTextEntry={visible} />
          <TouchableOpacity
            style={{ position: "absolute", right: 8 }}
            onPress={() => {
              setVisible(!visible);
              setIcon(visible ? "eye" : "eye-with-line");
              console.log(visible);
              console.log(icon);
            }}
          >
            <Entypo name={icon} size={20} color="black" />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 12,
            alignSelf: "center",
            fontWeight: "700",
            marginTop: 20,
          }}
        >
          Or Continue With
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                borderRadius: 16,
                paddingVertical: 16,
                width: 152,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="facebook" size={25} color="#3C5A9A" />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  marginLeft: 12,
                  alignSelf: "center",
                }}
              >
                Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                borderRadius: 16,
                paddingVertical: 16,
                width: 152,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Ionicons name="md-logo-google" size={25} />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  marginLeft: 12,
                  alignSelf: "center",
                }}
              >
                Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: 12,
            alignSelf: "center",
            fontWeight: "700",
            marginTop: 20,
            color: "#53E886",
          }}
        >
          Forgot Your Password?
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.replace("home");
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
              marginTop: 30,
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 16, color: "#fff" }}>
              Login
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
