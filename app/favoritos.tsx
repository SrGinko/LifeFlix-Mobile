import CardFav from "@/components/layout/favoritoCardComponent";
import { styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Favoritos() {
    return (
        <View style={styles.container}>
            <View style={[styles.header, { gap: 5 }]}>
                <TouchableOpacity
                    onPress={() => router.replace('/(tabs)/home')}
                    style={{ padding: 5, marginLeft: 5 }}
                >
                    <Ionicons name="arrow-back" size={25} color={"#fff"} />
                </TouchableOpacity>
                <Text style={styles.titulo}>Favoritos</Text>
            </View>
            <ScrollView style={{ margin: 5 }}>
                <CardFav />
            </ScrollView>
        </View>
    )
}