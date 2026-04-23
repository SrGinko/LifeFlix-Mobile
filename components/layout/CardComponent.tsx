import { styles } from "@/constants/styles";
import { useCanaisData } from "@/hooks/canaisData";
import { router } from "expo-router";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Pressable
} from "react-native";

type Props = {
    style?: any
}

export default function Card({ style }: Props) {
    const { canaisData, loading, error, baseCanaisUrl } = useCanaisData();
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const baseUrl = baseCanaisUrl[0];

    const ordenados = [...canaisData].sort((a, b) =>
        a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' })
    );
    
    if (loading) {
        return (
            <View style={cardStyle.loadingContainer}>
                <Text style={styles.text}>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={cardStyle.container}>
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
                                style={[
                                    cardStyle.imageContainer,
                                    {
                                        borderWidth: focused || selectedId === item.id ? 2 : 0.6,
                                    }
                                ]}
                                imageStyle={cardStyle.image}
                                resizeMode="contain"
                            >
                                <LinearGradient
                                    colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.9)']}
                                    style={cardStyle.gradient}
                                >
                                    <Text
                                        style={[styles.text, { fontSize: 13, fontWeight: '600' }]}
                                        numberOfLines={1}
                                    >
                                        {item.nome}
                                    </Text>
                                </LinearGradient>
                            </ImageBackground>
                        )}
                    </Pressable>
                ))
            }
        </View>
    );
}

const cardStyle = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        width: "100%",
        justifyContent: "center", // centraliza os cards
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    cardContainer: {
        width: 120,
        height: 180,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#000',
        marginRight: 10, // ESSENCIAL no horizontal
    },

    imageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderColor: '#474747',
        borderRadius: 15,
        overflow: 'hidden',
    },

    image: {
        borderRadius: 15,
    },

    gradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 6,
    },

    focused: {
    transform: [{ scale: 1.03 }],
    shadowColor: "#fff",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
}
});