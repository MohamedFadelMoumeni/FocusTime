import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import {TextInput} from 'react-native-paper';
import {spacing, fontSizes} from '../../utils/sizes';

const Focus = ({setFocusSubject}) => {
    const [tempItem, setTempItem] = useState(null);
    const handlePress = () =>{
        setFocusSubject(tempItem);
    }
    return (
        <View style={styles.container}>
            <View style={styles.Viewtitle}>
            <Text style={styles.title}>What you like to focus on ?</Text>
            <View style={styles.input}>
             <TextInput onEndEditing={({nativeEvent}) =>setTempItem(nativeEvent.text)} style={{flex: 1, marginRight: 20}} />
             <RoundedButton size={30} styleElement={styles.btn} handlePress={handlePress} title="+"/>
             </View>
             </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    Viewtitle: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent:'center'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: fontSizes.lg
    },
    input :{
        marginTop: spacing.lg-4,
        flexDirection:'row',
        alignItems:'center'
        
    },
    btn: {
        width: 50,
        height: 50
    }
})
export default Focus;