import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, Vibration} from 'react-native';
import {spacing} from '../../utils/sizes';
import {ProgressBar} from 'react-native-paper';
import Countdown from '../../components/Countdown';
import RoundedButton from '../../components/RoundedButton';
import Timming from './Timming';
import {useKeepAwake} from 'expo-keep-awake';
const Timer = ({focusSubject, setFocusSubject}) => {
    const [isPaused, setIsPaused] = useState(true);
    const [isVibrate, setIsVibrate] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.2);
    const [isCleaned, setIsCleaned] = useState(false);
    const changeTime = (time) => {
        setMinutes(time);
        setProgress(1);
        setIsPaused(true);
    }
    const onProgress = (progress) => {
     setProgress(progress);
    }
    const vibratation = () => {
        const ONE_SECOND_IN_MS = 1000;
        if(Platform.OS === "ios"){
            const interval  = setInterval(() => {Vibration.vibrate()}, ONE_SECOND_IN_MS);
            setTimeout(() => {
                clearInterval(interval);
            }, 10000);
        }else{
            Vibration.vibrate(ONE_SECOND_IN_MS*2);
        }
    }
    const handleVibrate = () => {
        setIsVibrate(false);
        Vibration.cancel();
    }
    const onEnd = () =>{
        setMinutes(0);
        setProgress(1);
        setIsPaused(true);
        vibratation();
        setIsVibrate(true);
        setIsCleaned(true);
        
       
    }
    useKeepAwake();
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
            <Countdown onEnd={onEnd} minutes={minutes} onProgress={onProgress} isPaused={isPaused}/>
            </View>
            <View style={{paddingTop: spacing.xxl}}>
            <Text style={styles.title}>Focusing on: </Text>
            <Text style={styles.subject}>{focusSubject}</Text>
            </View>
            <ProgressBar progress={progress} color="#5E84E2" style={{height: 10, marginTop: 20}}/>
            <Timming changeTime={changeTime}/>
            <View style={styles.btnView}>
            {
                !isPaused ? 
                (<RoundedButton handlePress={() =>setIsPaused(true)} size={20} styleElement={styles.btn}  title="Start"/>)
                : (            <RoundedButton handlePress={() =>setIsPaused(false)} size={20} styleElement={styles.btn}  title="Pause"/>
                )
            }
            {
                isVibrate ?
                (<RoundedButton handlePress={() => {
                    handleVibrate();
                    setFocusSubject(null);
                }} title="Stop" size={20}  styleElement={styles.btn}/>)
                : null
            }
            </View>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
            {
                !isCleaned ?
                (<RoundedButton handlePress={() => {
                    setIsCleaned(true);
                    setFocusSubject(null);
                }} title="Clear" styleElement={styles.btn} />)
                :null
            }
            </View>
            
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? spacing.md : spacing.lg
    },
    title: {
        textAlign: 'center',
        color: '#fff'
    },
    subject: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    countdown :{
        flex: 0.5,
        alignItems:'center',
        justifyContent:'center'
    },
    btn: {
        borderEndColor: 0,
        width: 80,
        height: 80,
    },
    btnView : {
        width: '100%',
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flex: 0.3
    }
})

export default Timer;