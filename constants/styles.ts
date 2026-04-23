import { StyleSheet } from 'react-native';
import { Fonts, TextType } from './theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0e0e0e',
        padding: 0,
        paddingTop: 35,
        color: '#fff'
    },
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#0c0c0c',
        alignItems: 'center',
    },
    titulo: {
        fontSize:TextType.title.fontSize,
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
        flexGrow: 1,
    }

})