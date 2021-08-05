import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundedButton from '../../components/RoundedButton';

const Timming = ({changeTime}) => {
    return (
        <View style={styles.container}>
            <RoundedButton handlePress={() => changeTime(10)} size={20} styleElement={styles.button}  title="10"/>
            <RoundedButton handlePress={() => changeTime(20)} size={20} styleElement={styles.button}  title="20"/>
            <RoundedButton handlePress={() => changeTime(30)} size={20} styleElement={styles.button}  title="30"/>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button: {
        width: 50,
        height: 50
    }
})

export default Timming;