import { Toast } from "@/components/layout/toast";
import { styles } from "@/constants/styles";
import { adicionarFavorito, lerFavoritos, removerFavorito } from "@/src/services/favoritos";
import { Ionicons } from "@expo/vector-icons";
import { useKeepAwake } from 'expo-keep-awake';
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import { WebView } from 'react-native-webview';

export default function Canal() {
    const { nome, id, image, url } = useLocalSearchParams();

    const [toastMessage, setToastMessage] = useState('');
    const [toastVisible, setToastVisible] = useState(false);
    const [toastColor, setToastColor] = useState('');
    const [toastIcon, setToastIcon] = useState<any>();

    const [favoritos, setFavoritos] = useState<any[]>([]);

    useKeepAwake();

    useEffect(() => {
        const fetchFavoritos = async () => {
            const dados = await lerFavoritos();
            setFavoritos(dados);
        };
        fetchFavoritos();
    }, []);

    const favorito = favoritos.find((item: any) => item.id === id);

    const showToast = (message: string, color: string, icon: any) => {
        setToastMessage(message);
        setToastVisible(true);
        setToastColor(color);
        setToastIcon(icon);
    };

    return (
        <View style={[styles.container, { backgroundColor: '#0f0f0f' }]}>

            <View style={localStyles.playerContainer}>
                <WebView
                    source={{ uri: `${url}` }}
                    style={localStyles.player}
                    allowsFullscreenVideo
                    javaScriptEnabled
                    domStorageEnabled
                    setSupportMultipleWindows={false}
                    onShouldStartLoadWithRequest={(req) => {
                        return req.url.startsWith(`${url}`);
                    }}
                />

                <View style={localStyles.headerOverlay}>
                    <TouchableOpacity
                        onPress={() => router.replace('/(tabs)/home')}
                        style={localStyles.headerButton}
                    >
                        <Ionicons name="arrow-back" size={22} color={"#fff"} />
                    </TouchableOpacity>

                    <Text
                        numberOfLines={1}
                        style={localStyles.headerTitle}
                    >
                        
                    </Text>

                    <View style={{ width: 30 }} />
                </View>

                {/* BOTÃO FAVORITO FLUTUANTE */}
                <View style={localStyles.favContainer}>
                    <TouchableOpacity
                        onPress={async () => {
                            if (favorito) {
                                await removerFavorito(id);
                                showToast('Removido dos favoritos', '#db611a', 'trash');
                            } else {
                                await adicionarFavorito({ id, nome, image, url });
                                showToast('Adicionado aos favoritos', '#06a700', 'checkmark-circle');
                            }

                            const dados = await lerFavoritos();
                            setFavoritos(dados);
                        }}
                        style={localStyles.favButton}
                    >
                        <Ionicons
                            name={favorito ? "heart" : "heart-outline"}
                            size={28}
                            color={favorito ? "#ff3b3b" : "#fff"}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* CONTEÚDO */}
            <ScrollView style={{ flex: 1 }}>
                <View style={localStyles.infoContainer}>
                    <Text style={localStyles.title}>{nome}</Text>
                    <Text style={localStyles.subtitle}>
                        Assistindo agora
                    </Text>
                </View>
            </ScrollView>

            {/* TOAST */}
            <Toast
                message={toastMessage}
                visible={toastVisible}
                color={toastColor}
                icon={toastIcon}
                onHide={() => setToastVisible(false)}
            />
        </View>
    );
}

const localStyles = StyleSheet.create({

    playerContainer: {
        height: 230,
        backgroundColor: '#000',
    },

    player: {
        flex: 1,
    },

    headerOverlay: {
        position: 'absolute',
        top: 40,
        left: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerButton: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 8,
        borderRadius: 10,
    },

    headerTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        maxWidth: '70%',
        textAlign: 'center'
    },

    favContainer: {
        position: 'absolute',
        bottom: -25,
        right: 20,
    },

    favButton: {
        backgroundColor: '#1c1c1c',
        borderRadius: 50,
        padding: 14,

        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },

    infoContainer: {
        padding: 15,
        marginTop: 30,
    },

    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
    },

    subtitle: {
        color: '#888',
        marginTop: 5,
    },
});