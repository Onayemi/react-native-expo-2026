import { router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const Booking = () => {
  return (
    <View>
      <Text>Booking</Text>

      <Button title="Contact Us" onPress={() => router.replace("/settings")} />
    </View>
  );
};

export default Booking;
