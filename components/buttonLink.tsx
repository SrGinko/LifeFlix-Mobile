import { AppRoutes } from "@/constants/routes"
import { router, Href } from "expo-router"
import { StyleSheet, View,Text, TouchableOpacity } from "react-native"

type Props = {
    style?: any
    text: string
    pagina: {
         pathname: "/perfil" | "/home" | "/settings" | "/canal";
    }
}

export default function ButtonLink({style, text, pagina}: Props){
    
    return(
        <TouchableOpacity 
        style={[buttonLinkStyles.buttonContainer, style]}
        onPress={() => router.push({
            pathname: pagina.pathname
        })}
        >
            <Text style={buttonLinkStyles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const buttonLinkStyles = StyleSheet.create({
    buttonContainer:{
        padding: 10,
        backgroundColor: '#242424'
    },
    textButton:{
        color: '#fff'
    }
})