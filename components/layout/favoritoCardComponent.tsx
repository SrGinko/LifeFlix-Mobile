import { styles } from "@/constants/styles";
import { lerFavoritos } from "@/src/services/favoritos";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    style?: any,
}


export default function CardFav({ style }: Props) {
    const [favoritos, setFavoritos] = useState<any[]>([])
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchFavoritos = async () => {
            const dados = await lerFavoritos()
            setFavoritos(dados)
        };
        fetchFavoritos()
    }, [])

    const ordenados = [...favoritos].sort((a, b) =>
        a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' })
    );

    return (
        <View style={[{ gap: 10, flexDirection: "row", flexWrap: "wrap", }]}>
            {
                favoritos.length > 0 ? ordenados.map((item: any) => (
                    <Pressable
                        key={item.id}
                        onFocus={() => setSelectedId(item.id)}
                        onPress={() => {

                            router.push({
                                pathname: '/canal',
                                params: {
                                    id: item.id,
                                    nome: item.nome,
                                    image: item.image,
                                    url: `${item.url}`
                                }
                            })
                        }}
                        style={({ focused }: any) => [
                            cardStyle.cardContainer,
                            (focused || selectedId === item.id) && cardStyle.focused,
                        ]}
                    >
                        {({ focused }: any) => (
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={{
                                    flex: 1, justifyContent: 'center', alignItems: 'center',
                                    borderWidth: focused || selectedId === item.id ? 2 : 0.6,
                                    borderColor: '#474747',
                                    borderRadius: 10,
                                }}
                                imageStyle={{
                                    borderRadius: 15, width: 107, height: 120, justifyContent: 'center', alignItems: 'center',
                                }}
                                resizeMode="contain"
                            >
                                <LinearGradient
                                    colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)']}
                                    style={[{ justifyContent: 'flex-end', alignItems: 'center', width: 110, borderRadius: 10, height: 180, padding: 5 }]}
                                >
                                    <Text
                                        style={[styles.text, { fontSize: 13, fontWeight: '600' }]}
                                        numberOfLines={1}
                                    >{item.nome}</Text>
                                </LinearGradient>
                            </ImageBackground>
                        )}
                    </Pressable>
                ))
                    : <View></View>
            }
        </View >
    )
}

const cardStyle = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 0, 0)',
        height: 180,
        width: 110,
        borderRadius: 15,
    },

    focused: {
        transform: [{ scale: 1.08 }],
        shadowColor: "#fff",
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
    }

})