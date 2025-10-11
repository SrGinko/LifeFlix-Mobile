import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home/index" />    {/* Página inicial */}
      <Stack.Screen name="home/filmes" />   {/* Filmes */}
      <Stack.Screen name="canais/canais" /> {/* Canais */}
    </Stack>
  );
}