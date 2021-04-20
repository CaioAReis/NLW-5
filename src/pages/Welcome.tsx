import React, { useState } from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';

export function Welcome() {

    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(true);
    }

    const handleHidden = () => {
        setVisible(false);
    }

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={styles.image}/>
            }

            <Text style={styles.subTitle}>
                Não esqueça mais de regar plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title='Mostrar imagem' onPress={handleVisible}/>
            <Button title='Esconder imagem' onPress={handleHidden}/>

            <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                <Text style={{fontSize: 30, color: colors.white}} >
                    x
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 88
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 30,
        height: 56,
        width: 56
    },
    image: {
        width: 292,
        height: 284
    }
});