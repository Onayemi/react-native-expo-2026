import { Link, router } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text>index 222</Text>
      <Link href="/(drawer)/(tabs)">Go to Tabs</Link>
      <Button
        title="Go to Booking"
        onPress={() => {
          router.replace("/(drawer)/booking");
        }}
      />
    </View>
  );
};

export default index;
