import { styles } from "@/constants/styles";
import React, { useEffect } from "react";
import { Animated, StyleSheet, Text } from "react-native";

type Props = {
    message: string;
    visible: boolean,
    duration?: number
    color: string
    onHide: () => void;
}

export const Toast = ({message, visible, duration = 2000, onHide, color}: Props) =>{
    const [opacity] = React.useState(new Animated.Value(0))

    useEffect(() =>{
        if (visible){
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            }).start();

            const timer = setTimeout(() =>{
                Animated.timing(opacity,{
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }).start(() => onHide())
            }, duration)

            return () => clearTimeout(timer)
        }
    }, [visible])
    if(!visible) return null

    return(
        <Animated.View style={[toastStyles.toast, {opacity, backgroundColor: '#141414', borderColor: color}]}>
            <Text style={styles.text}>{message}</Text>
        </Animated.View>
    )
}

const toastStyles = StyleSheet.create({
    toast:{
        position: 'absolute',
        borderWidth: 1,
        bottom: 50,
        left: '10%',
        right: '10%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        zIndex: 100
    },
})