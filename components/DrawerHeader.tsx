import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function DrawerHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/favicon.png")}
        style={styles.image}
      />
      <Text variant="titleMedium">Onayemi Samuel</Text>
      <Text variant="labelMedium" style={{ opacity: 0.6 }}>
        Fintech App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
});
