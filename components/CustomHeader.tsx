import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CustomHeader = ({ name }: any) => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
        {/* <Text>Welcome back!</Text> */}
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name="history"
          onPress={() => router.push("/booking")}
          color="#000"
          size={20}
        />
        <MaterialCommunityIcons name="camera" color="#000" size={20} />
        <MaterialCommunityIcons
          name="logout"
          onPress={() => router.push("/login")}
          color="#000"
          size={20}
        />
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  icon: {
    flexDirection: "row",
    gap: 10,
  },
});
