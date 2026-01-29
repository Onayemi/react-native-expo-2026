import AdvertCard from "@/components/AdvertCard";
import BalanceCard from "@/components/BalanceCard";
import CustomHeader from "@/components/CustomHeader";
import StatCard from "@/components/StatCard";
import TransactionItem from "@/components/TransactionItem";
import { FlashList } from "@shopify/flash-list";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

const transactions = [
  {
    id: "1",
    title: "Transfer from John",
    date: "Today",
    amount: "+₦25,000",
    type: "credit",
    icon: "arrow-down",
  },
  {
    id: "2",
    title: "Electricity Bill",
    date: "Yesterday",
    amount: "-₦12,500",
    type: "debit",
    icon: "flash",
  },
  {
    id: "3",
    title: "Internet Subscription",
    date: "2 days ago",
    amount: "-₦18,000",
    type: "debit",
    icon: "wifi",
  },
];

export default function Dashboard() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader name="Dashboard" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View style={styles.container}>
          {/* Custom Header */}

          <BalanceCard />

          <View style={styles.stats}>
            <StatCard title="Income" amount="₦120,000" />
            <StatCard title="Expense" amount="₦75,400" />
          </View>

          {/* Advert Section */}
          <AdvertCard />

          <Text variant="titleMedium" style={styles.section}>
            Recent Transactions
          </Text>

          <FlashList
            data={transactions}
            estimatedItemSize={64}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TransactionItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  stats: {
    flexDirection: "row",
    gap: 12,
  },
  section: {
    marginVertical: 12,
  },
});
