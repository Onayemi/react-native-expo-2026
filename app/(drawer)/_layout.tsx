import DrawerHeader from "@/components/DrawerHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{ headerShown: true }}
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          {/* Custom Header */}
          <DrawerHeader />

          {/* Drawer Items */}
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="index"
        options={{
          // headerShown: true,
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        listeners={{
          press: () => {
            router.push({
              pathname: "/(drawer)/(tabs)",
              params: { title: "Dashboard" },
            });
          },
        }}
      />
      <Drawer.Screen
        name="(tabs)/profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="support"
        options={{
          title: "Support",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="booking"
        options={{
          title: "Booking",
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
