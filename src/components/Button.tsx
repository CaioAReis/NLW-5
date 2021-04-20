import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({ title, ...rest } : ButtonProps ) {
    return (
        <TouchableOpacity 
            {...rest}  
            style={{
                backgroundColor: 'red', 
                padding: 20, 
                height: 50, 
                alignItems: 'center', 
                justifyContent: 'center', 
                borderRadius: 16 
            }}>
            <Text style={{
                color: 'white', 
                fontWeight: 'bold'
            }}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}