import { styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "@react-navigation/elements";
import { router } from "expo-router";
import { View, StyleSheet, FlatList, ScrollView, Text, TouchableOpacity } from "react-native";

export default function SeparatorComponent(props: any,) {
    return (
        <View>
            <View style={SeparatorStyles.separatorTitle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={styles.titulo}>{props.title}</Text>
                    <TouchableOpacity
                        onPress={() => router.push(props.onDirect)}
                        style={{ padding: 5 }}
                    >
                        <Ionicons name="arrow-forward" size={23} color={"#fff"} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={SeparatorStyles.separatorContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {props.children}
            </ScrollView>
        </View>
    )
}

const SeparatorStyles = StyleSheet.create({
    separatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 200,
        padding: 10,
    },
    separatorTitle: {
        color: '#fff',
        padding: 10,
    }

})