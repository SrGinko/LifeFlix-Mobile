import { styles } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

type Props = {
    message: string;
    visible: boolean;
    duration?: number;
    color: string;
    icon?: any
    onHide: () => void;
};

export const Toast = ({
    message,
    visible,
    duration = 2000,
    onHide,
    color,
    icon = "checkmark-circle"
}: Props) => {

    const opacity = React.useRef(new Animated.Value(0)).current;
    const translateY = React.useRef(new Animated.Value(30)).current;

    useEffect(() => {
        if (visible) {
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 250,
                    useNativeDriver: true
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: true
                })
            ]).start();

            const timer = setTimeout(() => {
                Animated.parallel([
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateY, {
                        toValue: 30,
                        duration: 200,
                        useNativeDriver: true,
                    })
                ]).start(() => onHide());
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [visible]);

    if (!visible) return null;

    return (
        <Animated.View
            style={[
                toastStyles.toast,
                {
                    opacity,
                    transform: [{ translateY }],
                    borderColor: color
                }
            ]}
        >
            <View style={toastStyles.content}>
                <Ionicons name={icon} size={20} color={color} />

                <Text style={[styles.text, toastStyles.text]}>
                    {message}
                </Text>
            </View>
        </Animated.View>
    );
};

const toastStyles = StyleSheet.create({
    toast: {
        position: 'absolute',
        bottom: 50,
        left: '8%',
        right: '8%',
        padding: 14,
        borderRadius: 14,
        backgroundColor: '#1c1c1c',
        borderWidth: 1,

        // sombra
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,

        zIndex: 100,
    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },

    text: {
        flex: 1,
        fontSize: 14,
        fontWeight: '500',
    },
});