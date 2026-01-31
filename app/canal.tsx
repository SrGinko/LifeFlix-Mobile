import { styles } from "@/constants/styles";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview'
import ButtonLink from "@/components/buttonLink";
import { Ionicons } from "@expo/vector-icons";
import { adicionarFavorito, lerFavoritos, removerFavorito } from "@/src/services/favoritos";
import { Toast } from "@/components/toast";
import { useState, useEffect } from "react";
import { useKeepAwake } from 'expo-keep-awake';


export default function Canal() {
    const { nome, id, image, url } = useLocalSearchParams()
    const [toastMessage, setToastMessage] = useState('');
    const [toastVisible, setToastVisible] = useState(false);
    const [toastColor, setToastColor] = useState('');
    const [favoritos, setFavoritos] = useState<any[]>([])

    useKeepAwake()

    useEffect(() => {
        const fetchFavoritos = async () => {
            const dados = await lerFavoritos()
            setFavoritos(dados)
        };
        fetchFavoritos()
    }, [])

    const favorito = favoritos.find((item: any) => item.id === id)

    const showToast = (message: string, color: string) => {
        setToastMessage(message)
        setToastVisible(true)
        setToastColor(color)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.header, { gap: 10 }]}>
                <TouchableOpacity
                    onPress={() => router.replace('/(tabs)/home')}
                    style={{ padding: 5, marginLeft: 5 }}
                >
                    <Ionicons name="arrow-back" size={25} color={"#fff"} />
                </TouchableOpacity>
                <Text style={styles.titulo}>{nome}</Text>
            </View>
            <ScrollView style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <WebView
                    source={{ uri: `${url}` }}
                    style={{ height: 280, backgroundColor: '#171717', justifyContent: 'center', alignItems: 'center', borderWidth: 0.8, borderColor: '#5c5c5c' }}
                    allowsFullscreenVideo
                    javaScriptEnabled
                    domStorageEnabled
                    setSupportMultipleWindows={false}
                    onShouldStartLoadWithRequest={(req) => {
                        return req.url.startsWith(`${url}`);
                    }}
                />
                <View style={{ backgroundColor: '#171717', justifyContent: 'space-between', flexDirection: 'row', padding: 10, borderRadius: 10, width: '100%', alignItems: 'center' }}>
                    {
                        favorito ? <TouchableOpacity
                            onPress={async () => {
                                await removerFavorito(id)
                                const dados = await lerFavoritos()
                                setFavoritos(dados)
                                showToast('Favorito removido!', '#db611a')

                            }}
                            style={{ backgroundColor: '#131313', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 5 }}>
                            <Ionicons name="heart-dislike" size={32} color={'#fff'} />
                        </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={async () => {
                                    await adicionarFavorito({ id: id, nome: nome, image: image, url: url })
                                    const dados = await lerFavoritos()
                                    setFavoritos(dados)
                                    showToast('Canal adicionado aos Favoritos!', '#06a700')

                                }}
                                style={{ backgroundColor: '#131313', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 5 }}>
                                <Ionicons name="heart" size={32} color={'#fff'} />
                            </TouchableOpacity>
                    }
                </View>
            </ScrollView>
            <Toast
                message={toastMessage}
                visible={toastVisible}
                color={toastColor}
                onHide={() => setToastVisible(false)}
            />
        </View>
    )
}
