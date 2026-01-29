import { StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-paper";

export default function AdvertCard() {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium">🎉 Cashback Offer</Text>
        <Text variant="bodyMedium" style={styles.text}>
          Get 5% cashback on every transfer this week.
        </Text>

        <Button
          mode="contained-tonal"
          style={{ marginTop: 8 }}
          onPress={() => {}}
        >
          Activate
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginVertical: 12,
    backgroundColor: "#a2e8f1",
  },
  text: {
    marginTop: 4,
    opacity: 0.8,
  },
});
