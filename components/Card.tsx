import { useRoute } from "@react-navigation/native"
import { useRouter } from "expo-router"
import { View, ViewProps, StyleSheet, Image, Text, TouchableOpacity } from "react-native"

type Card = ViewProps & {
    title: string,
    id?: string,
    url?: string,
    image: string
}


export function Card({ title, id, url, image }: Card) {
    const router = useRouter()

    return (
        <TouchableOpacity
            key={url}
            activeOpacity={0.5}
            style={styles.cardContainer}
            onPress={() => 
                router.push({
                    pathname: '/canais/canais',
                    params: {id, url, title}
                })
            }
        >
            <View>
                <View><Image source={{ uri: image }} style={styles.image}></Image></View>
                <View style={styles.cardTitle}><Text style={styles.text}>{title}</Text></View>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 140,
        height: 140,
        flexDirection: 'column',
        padding: 10,
        backgroundColor: '#171717',
        borderRadius: 10,
        borderColor: '#d9d9d9',
        borderWidth: 0.1
    },
    image: {
        height: 72,
        borderRadius: 5
    },

    text: {
        color: '#d9d9d9',
    },

    cardTitle: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }

})