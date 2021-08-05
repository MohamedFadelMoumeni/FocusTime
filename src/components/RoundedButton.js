import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';


const RoundedButton = ({handlePress, styleElement, title, size}) => {
    return (
        <TouchableOpacity onPress={handlePress} style={[styleElement, styles.button]}>
            <Text  style={[styles.text, {fontSize: size}]}>{title}</Text>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#fff',
        borderWidth: 2
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
        }

})
export default RoundedButton