import { styles } from "@/constants/styles";
import { useCanaisData } from "@/hooks/canaisData";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from "react-native";

type Props = {
    style?: any
}


export default function Card({ style }: Props) {
    const { canaisData, loading, error, baseCanaisUrl } = useCanaisData()
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const baseUrl = baseCanaisUrl[0]
    const ordenados = [...canaisData].sort((a, b) =>
        a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' })
    );

    if (loading) {
        <Text style={[styles.text, {flex: 1, width: '100%', justifyContent: "center", alignItems: 'center' }]}>
            Carregando...
        </Text>
    }

    return (
        <View style={[{ gap: 10, flexDirection: "row", flexWrap: "wrap" }]}>
            {
                ordenados.map((item: any) => (
                    <Pressable
                        key={item.id}
                        onFocus={() => setSelectedId(item.id)}
                        onPress={() => {

                            router.push({
                                pathname: '/canal',
                                params: {
                                    id: item.id,
                                    nome: item.nome,
                                    image: item.capaUrl,
                                    url: `${baseUrl.url + item.url}`
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
                                source={{ uri: item.capaUrl }}
                                style={{
                                    flex: 1, justifyContent: 'center', alignItems: 'center',
                                    borderWidth: focused || selectedId === item.id ? 2 : 0.6,
                                    borderColor: '#474747',
                                    borderRadius: 10,
                                }}
                                imageStyle={{
                                    borderRadius: 15, width: 117, height: 120, justifyContent: 'center', alignItems: 'center',
                                }}
                                resizeMode="contain"
                            >
                                <LinearGradient
                                    colors={['transparent', 'transparent', 'transparent', '#3d3d3d']}
                                    style={[{ justifyContent: 'flex-end', alignItems: 'center', width: 120, borderRadius: 10, height: 180, padding: 5 }]}
                                >
                                    <Text style={styles.text}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >{item.nome}</Text>
                                </LinearGradient>
                            </ImageBackground>
                        )}
                    </Pressable>
                ))
            }
        </View>
    )
}

const cardStyle = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgb(0, 0, 0)',
        height: 180,
        width: 120,
        borderRadius: 15,
    },

    focused: {
        transform: [{ scale: 1.08 }],
    },

})