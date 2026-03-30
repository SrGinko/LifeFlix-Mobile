import { View, StyleSheet, Pressable, Text, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

type Props = {
    visible: boolean;
    onClose: () => void;
};

export function MenuLateral({ visible, onClose }: Props) {
    return (
        <>
            {/* Overlay */}
            {visible && (
                <Pressable style={styles.overlay} onPress={onClose} />
            )}

            <MotiView
                from={{ translateX: +width }}
                animate={{ translateX: visible ? 0 : +width }}
                transition={{ type: "timing", duration: 250 }}
                style={styles.menu}
            >
                <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.title}>Menu</Text>

                </View>

                <View style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 10 }}>
                    <TouchableOpacity style={{ display: 'flex', width: '100%', padding: 10, backgroundColor: '#1d1d1d', borderRadius: 10 }}>
                        <Text style={styles.text}><Ionicons name="person" size={16}/> Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => router.push('/favoritos')}
                    style={{ display: 'flex', width: '100%', padding: 10, backgroundColor: '#1d1d1d', borderRadius: 10 }}>
                        <Text style={styles.text}><Ionicons name="heart" size={16}/> Favoritos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: 'flex', width: '100%', padding: 10, backgroundColor: '#1d1d1d', borderRadius: 10 }}>
                        <Text style={styles.text}><Ionicons name="settings" size={16}/> Configurações</Text>
                    </TouchableOpacity>
                </View>
            </MotiView>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1,
    },

    menu: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: width * 0.6,
        backgroundColor: "#0f0f0f",
        padding: 20,
        zIndex: 2,
        borderLeftWidth: 0.8,
        borderColor: '#2b2b2b'
    },

    title: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },

    item: {
        paddingVertical: 15,
    },

    text: {
        color: "#fff",
        fontSize: 16,
        justifyContent: 'space-between'
    },
});
