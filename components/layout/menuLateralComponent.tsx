import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { MotiView } from "moti";
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
    visible: boolean;
    onClose: () => void;
};

export function MenuLateral({ visible, onClose }: Props) {
    return (
        <>
            {visible && (
                <Pressable style={styles.overlay} onPress={onClose} />
            )}

            <MotiView
                from={{ translateX: width }}
                animate={{ translateX: visible ? 0 : width }}
                transition={{ type: "timing", duration: 300 }}
                style={styles.menu}
            >

                {/* HEADER */}
                <View style={styles.profile}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={26} color="#fff" />
                    </View>

                    <View>
                        <Text style={styles.name}>Usuário</Text>
                        <Text style={styles.subtitle}>Bem-vindo</Text>
                    </View>
                </View>

                {/* SEÇÃO */}
                <Text style={styles.sectionTitle}>Navegação</Text>

                <TouchableOpacity
                    onPress={() => router.push('/favoritos')}
                    style={styles.item}
                >
                    <Ionicons name="heart" size={20} color="#fff" />
                    <Text style={styles.itemText}>Favoritos</Text>
                    <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                    <Ionicons name="person" size={20} color="#fff" />
                    <Text style={styles.itemText}>Perfil</Text>
                    <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Sistema</Text>

                <TouchableOpacity style={styles.item}>
                    <Ionicons name="settings" size={20} color="#fff" />
                    <Text style={styles.itemText}>Configurações</Text>
                    <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>

            </MotiView>
        </>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 998,
    },

    menu: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        width: width * 0.6,

        backgroundColor: "#0f0f0f",
        padding: 20,

        zIndex: 999, // aumenta isso
        elevation: 999, // ANDROID
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: '#1f1f1f',
        justifyContent: 'center',
        alignItems: 'center',
    },

    name: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },

    subtitle: {
        color: '#888',
        fontSize: 12
    },

    sectionTitle: {
        color: '#888',
        marginTop: 10,
        marginBottom: 5,
        fontSize: 13
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
        borderRadius: 12,
        backgroundColor: '#1a1a1a',
        marginBottom: 8,
    },

    itemText: {
        color: '#fff',
        flex: 1,
        marginLeft: 10,
    },
});
