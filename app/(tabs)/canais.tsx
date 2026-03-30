import Card from "@/components/layout/CardComponent";
import { MenuLateral } from "@/components/layout/menuLateralComponent";
import { styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from "react-native";


export default function Canais() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <View style={styles.container}>
            <View style={[styles.header, { justifyContent: 'space-between', }]}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', margin: 5 }} >LifeFlix</Text>
                <Pressable
                    onPress={() => setMenuOpen(true)}
                    style={{ backgroundColor: '#141414', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10, margin: 5 }}>
                    <Ionicons name='menu' size={25} color={"#fff"} />
                </Pressable>
            </View>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                        <Card/>
                </ScrollView>
            </View>
            <MenuLateral
                visible={menuOpen}
                onClose={() => setMenuOpen(false)}
            >
            </MenuLateral>
        </View>
    )
}