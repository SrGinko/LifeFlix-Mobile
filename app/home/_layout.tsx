import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#777",
        tabBarStyle: {
          backgroundColor: "#171717",
          borderColor: '#171717'
        },
      }}
    >
      <Tabs.Screen name="index" options={{
        title: "Início",
        tabBarIcon: ({color, size}) => (
          <Ionicons name="home-sharp" size={size} color={color} />
        )
        }} />
      <Tabs.Screen name="filmes" options={{
        title: "Filmes",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="play" size={size} color={color} />
        )
      }} />
    </Tabs>
  );
}