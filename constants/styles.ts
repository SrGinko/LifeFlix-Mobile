import { StyleSheet } from 'react-native';
import { Fonts, TextType } from './theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 0,
        paddingTop: 35,
    },
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#171717',
        alignItems: 'center'
    },
    titulo: {
        fontSize: TextType.title.fontSize,
        color: TextType.title.color,
        fontFamily: Fonts.sans,
        fontWeight: 'bold'
    },
    text: {
        color: TextType.title.color,
    },
    content: {
        flexDirection: 'column',
        padding: 10,
        flexGrow: 1
    }

})