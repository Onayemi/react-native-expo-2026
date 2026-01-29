import { List, Text } from "react-native-paper";

export default function TransactionItem({ item }: any) {
  return (
    <List.Item
      title={item.title}
      description={item.date}
      left={(props) => <List.Icon {...props} icon={item.icon} />}
      right={() => (
        <Text
          style={{
            color: item.type === "credit" ? "green" : "red",
          }}
        >
          {item.amount}
        </Text>
      )}
    />
  );
}
