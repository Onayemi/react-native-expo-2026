import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, IconButton, Text } from "react-native-paper";

export default function BalanceCard() {
  const [secureText, setSecureText] = useState(false);
  const amt = "₦245,800.00";
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <Text variant="labelMedium">Total Balance</Text>
          <IconButton
            icon={secureText ? "eye-off" : "eye-outline"}
            size={18}
            onPress={() => setSecureText(!secureText)}
          />
        </View>

        <Text variant="headlineLarge" style={styles.balance}>
          {secureText ? "********" : `${amt}`}
        </Text>

        <View style={styles.actions}>
          <IconButton icon="send" />
          <IconButton icon="download" />
          <IconButton icon="qrcode" />
          <IconButton icon="plus-circle" />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  actions: {
    fontSize: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
});
