import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs, useNavigation } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

const TabLayout = () => {
  const navigation = useNavigation();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#f5f5f5",
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "#666666",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transfer",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="transfer" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="test/index"
        options={{
          title: "Testing",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="lock" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="test/[id]"
        options={{
          href: null,
          title: "Testing",
          headerShown: true,
          headerLeft: () =>
            navigation.canGoBack() ? (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{ marginLeft: 12 }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color="#000"
                />
              </Pressable>
            ) : null,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
