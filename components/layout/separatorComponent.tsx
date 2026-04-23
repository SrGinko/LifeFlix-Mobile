import { styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";

export default function SeparatorComponent(props: any) {
    return (
        <View style={SeparatorStyles.container}>
            
            <View style={SeparatorStyles.header}>
                <Text style={SeparatorStyles.title}>{props.title}</Text>

                <TouchableOpacity
                    onPress={() => router.push(props.onDirect)}
                    style={SeparatorStyles.button}
                >
                    <Ionicons name="arrow-forward" size={20} color={"#fff"} />
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={SeparatorStyles.scrollContent}
            >
                {props.children}
            </ScrollView>
        </View>
    );
}

const SeparatorStyles = StyleSheet.create({
    container: {
        backgroundColor: '#131313',
        borderRadius: 12,
        paddingVertical: 10,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginBottom: 5,
    },

    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },

    button: {
        padding: 6,
    },

    scrollContent: {
        paddingHorizontal: 10,
        gap: 10,
    },
});