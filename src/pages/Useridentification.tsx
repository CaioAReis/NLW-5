import React, { useState } from 'react';
import {
    StyleSheet, 
    View, 
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {

    const [isFocused, setFocus] = useState(false);
    const [isFilled, setisFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    const handleInputBlur = () => {
        setFocus(false);
        setisFilled(!!name);
    }
    const handleInputFocus = () => setFocus(true);

    const handleInputChange = (value: string) => {
        setisFilled(!!value);
        setName(value);
    }

    function handleSubmit() {
        navigation.navigate('Confirmation');
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.content} 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.content}>
                        <View style={styles.form}>

                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '😄' : '😀'}
                                </Text>

                                <Text style={styles.title}>
                                    Como podemos {'\n'} chamar você?
                                </Text>
                            </View>

                            <TextInput 
                                placeholder='Digite um nome'
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                onChangeText={handleInputChange}
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && 
                                    { borderColor: colors.green }
                                ]}
                            />

                            <View style={styles.footer}>
                                <Button title='Continuar' onPress={handleSubmit}/>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },
    header: {
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        marginTop: 20,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});