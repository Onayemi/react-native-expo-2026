import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";

export default function ProductDetail() {
  const { id, name, price } = useLocalSearchParams<{
    id: string;
    name: string;
    price: string;
  }>();

  const [customerName, setCustomerName] = useState("");
  const [note, setNote] = useState("");

  const AddPayment = () => {
    if (!customerName || !note) {
      alert("Please fill all fields");
      return;
    }
    alert(
      `Order Submitted\n\nProduct: ${name}\nPrice: ₦${price}\nCustomer: ${customerName}\nNote: ${note}`,
    );
    setCustomerName("");
    setNote("");
    router.push("/products");
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title={name} subtitle={`₦${price}`} />
        <Card.Content>
          <Text variant="titleMedium">Enter Your Details</Text>

          <TextInput
            label="Your Name"
            value={customerName}
            onChangeText={setCustomerName}
            mode="outlined"
            style={styles.input}
          />

          <TextInput
            label="Note / Quantity"
            value={note}
            onChangeText={setNote}
            mode="outlined"
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={AddPayment}
            style={{ marginTop: 12 }}
          >
            Submit
          </Button>
          {/* <Button
            mode="contained"
            onPress={() => {
              Alert.alert(
                "Order Submitted",
                `Product: ${name}\nPrice: ₦${price}\nCustomer: ${customerName}\nNote: ${note}`,
                [{ text: "OK", onPress: () => router.back() }],
              );
            }}
            style={{ marginTop: 12 }}
          >
            Submit
          </Button> */}
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
    borderRadius: 12,
  },
  input: {
    marginTop: 10,
  },
});
