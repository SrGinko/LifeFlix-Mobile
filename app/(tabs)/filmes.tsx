import { MenuLateral } from "@/components/menuLateralComponent";
import { styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from 'react'
import { Text, View, Pressable } from "react-native";


export default function Filmes() {
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
            <MenuLateral
                visible={menuOpen}
                onClose={() => setMenuOpen(false)}
            >
            </MenuLateral>
        </View>
    )
}