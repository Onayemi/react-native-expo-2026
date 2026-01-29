import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

type Props = {
  title: string;
  amount: string;
  icon?: string;
};

export default function StatCard({ title, amount }: Props) {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="labelMedium">{title}</Text>
        <Text variant="titleLarge">{amount}</Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 14,
  },
});
