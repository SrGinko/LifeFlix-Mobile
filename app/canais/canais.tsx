import { styles } from "@/constants/styles";
import { useNavigation, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function CanalPage() {
    const navigation = useNavigation();
    const { title, url, id } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: title ? `${title}` : "Canais",
        });
    }, [title]);

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={styles.content}>
                <View style={style.playerContainer}>
                    <WebView
                        source={{ uri: `${url}${id}` }}
                        style={style.webview}
                        allowsFullscreenVideo={true}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                    />
                </View>
             
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    playerContainer: {
        height: 240,
        marginTop: 20,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    webview: {
        height: 240,
        borderRadius: 12
    },

    teste:{
        height: 240,
        backgroundColor: '#fff'
    }
})

