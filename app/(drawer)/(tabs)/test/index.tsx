import CustomHeader from "@/components/CustomHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
// import ImageCardSlider from "./advert";
// import ImageCardGrid from "./advert2";

const ICONS = [
  "food",
  "cart",
  "shopping",
  "coffee",
  "hamburger",
  "pizza",
  "silverware-fork-knife",
  "cup",
  "bottle-wine",
  "ice-cream",
  "fruit-cherries",
  "fish",
  "egg",
  "cheese",
  "bread-slice",
  "noodles",
];

const products = Array.from({ length: 16 }).map((_, i) => ({
  id: i.toString(),
  name: `Item ${i + 1}`,
  price: (i + 1) * 500,
  icon: ICONS[i % ICONS.length],
}));

const COLUMN = 4;
const ROWS = 2;
const ITEM_WIDTH = Dimensions.get("window").width / COLUMN - 16;

export default function ProductCardGrid() {
  const theme = useTheme();

  // Split products into pages of 8 (4x2)
  const pages = [];
  for (let i = 0; i < products.length; i += COLUMN * ROWS) {
    pages.push(products.slice(i, i + COLUMN * ROWS));
  }

  return (
    <View>
      <CustomHeader name="Products" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Custom Header */}

          <Card style={styles.card}>
            <Card.Title title="Popular Products" />
            <Card.Content>
              <FlatList
                data={pages}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.page}>
                    {item.map((product) => (
                      <Pressable
                        key={product.id}
                        style={[styles.item, { width: ITEM_WIDTH }]}
                        onPress={() =>
                          router.push({
                            pathname: "/single-page/product/[id]",
                            params: {
                              id: product.id,
                              name: product.name,
                              price: product.price.toString(),
                            },
                          })
                        }
                      >
                        <View
                          style={[
                            styles.iconBox,
                            { backgroundColor: theme.colors.primaryContainer },
                          ]}
                        >
                          <MaterialCommunityIcons
                            name={product.icon}
                            size={26}
                            color={theme.colors.primary}
                          />
                        </View>
                        <Text variant="labelSmall" numberOfLines={1}>
                          {product.name}
                        </Text>
                        <Text
                          variant="labelSmall"
                          style={{
                            fontWeight: "bold",
                            color: theme.colors.primary,
                          }}
                        >
                          ₦{product.price}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                )}
              />
            </Card.Content>
          </Card>

          {/* <ImageCardSlider />
      <ImageCardGrid /> */}

          <View style={{ paddingTop: 20 }}>
            <Button
              title="Go to Booking"
              onPress={() => router.push("/booking")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  card: {
    marginHorizontal: 5,
    borderRadius: 12,
  },
  page: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Dimensions.get("window").width - 32,
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    marginVertical: 12,
  },
  iconBox: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
  },
});
