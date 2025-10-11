import { TextType } from "@/constants/theme";
import React from "react";
import { Text, View, ViewProps, StyleSheet, ScrollView } from "react-native";

type ContentContainerProps = ViewProps & {
    title: string,
    children: React.ReactNode
}



export function ContentContainer({ title, children }: ContentContainerProps) {
    return (
        <View style={styles.contentContainer}>
            <View style={styles.contentTitle}><Text style={styles.title}>{title}</Text><Text> t </Text></View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', gap: '20' }}>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        flexGrow: 1
    },

    contentTitle: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },

    content: {
        alignItems: 'center',
        gap: 20,
        flexDirection: 'row',
    },

    title: {
        color: TextType.title.color,
        fontSize: TextType.title.fontSize,
        fontWeight: 'bold'
    }
})