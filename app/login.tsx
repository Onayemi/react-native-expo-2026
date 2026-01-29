import AppButton from "@/components/Button";
import AppTextInput from "@/components/Input";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function DemoScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [country, setCountry] = useState("");

  const countryList = [
    { label: "Nigeria", value: "Nigeria" },
    { label: "USA", value: "USA" },
    { label: "India", value: "India" },
  ];

  const handleSubmit = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }
    alert(`Name: ${email}\nPassword: ${password}`);
    router.replace("/(drawer)/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f5f5f5" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View>
            {/* Logo / Image */}
            <Image
              source={require("@/assets/images/icon.png")} // replace with your logo
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginBottom: 10, alignItems: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Welcome Back!
            </Text>
          </View>
          <AppTextInput
            label="Enter email"
            value={email}
            onChangeText={setEmail}
          />
          <AppTextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secure
          />
          {/* <AppDropdown
            label="Country"
            value={country}
            setValue={setCountry}
            list={countryList}
          /> */}

          {/* <LocationDropdown /> */}

          <AppButton text="Submit" onPress={handleSubmit} />
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Link href="/register">
              <Text style={{ color: "blue", fontSize: 16 }}>
                Don't have an account? Register
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    // alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
    paddingHorizontal: 60,
    alignSelf: "center",
  },
});
