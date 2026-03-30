import Card from '@/components/layout/CardComponent'
import CardFav from '@/components/layout/favoritoCardComponent'
import { MenuLateral } from '@/components/layout/menuLateralComponent'
import SeparatorComponent from '@/components/layout/separatorComponent'
import { styles } from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'

export default function Home() {
      const [menuOpen, setMenuOpen] = useState(false);
    return (
        <View style={styles.container}>
            <View style={[styles.header, { justifyContent: 'space-between' }]}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', margin: 5, marginLeft: 10 }} >LifeFlix</Text>
                <Pressable 
                onPress={() => setMenuOpen(true)}
                style={{justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius:10, margin: 5}}>
                    <Ionicons name='menu' size={25} color={"#fff"} />
                </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={true}>
                <SeparatorComponent title="Favoritos" onDirect='/favoritos'>
                    <CardFav/>
                </SeparatorComponent>
                <SeparatorComponent title="Canais" onDirect='/canais'>
                    <Card />
                </SeparatorComponent>
            </ScrollView>
            <MenuLateral
             visible={menuOpen}
             onClose={() => setMenuOpen(false)}
            >
            </MenuLateral>
        </View>
    )
}