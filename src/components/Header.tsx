import React from 'react';
import { 
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet 
} from 'react-native';

import userImg from '../assets/userImg.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Caio Almeida</Text>
            </View>
            <Image source={userImg}  style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: StatusBar.currentHeight,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        color: colors.heading, 
        fontFamily: fonts.heading,
        lineHeight: 40
    }
});