import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function FoodDetail() {
  const { title, price, image } = useLocalSearchParams<{
    title: string;
    price: string;
    image: string;
  }>();

  const Payment = () => {
    alert(`You have ordered ${title} for ${price} successfully!`);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <Card.Content>
          <Text variant="headlineSmall">{title}</Text>
          <Text variant="titleMedium" style={{ marginVertical: 6 }}>
            {price}
          </Text>
          <Button onPress={Payment} mode="contained">
            Order Now
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    borderRadius: 14,
  },
  image: {
    width: "100%",
    height: 220,
  },
});
