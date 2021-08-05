import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {fontSizes, spacing} from '../utils/sizes';
import {colors} from '../utils/colors';

const MinutesToMiils = (minutes) =>{
    return minutes*1000*60
}
const formatTime = (time) => time > 10 ? time: `0${time}`;



const Countdown = ({minutes, isPaused, onProgress, onEnd}) =>{
    const [Millis, setMillis] = useState(MinutesToMiils(minutes));
    const minutesTotal = Math.floor(Millis/1000/60)%60;
    const secondes = Math.floor(Millis/1000)%60;
    const interval = React.useRef(null);

    const countDown = () =>{
        setMillis((time) => {
         if(time === 0) {
            onEnd();
             return time;
         }
          const timeLeft = time - 1000;
          onProgress(timeLeft / MinutesToMiils(minutes))
         return timeLeft;
        })
    }

    useEffect(() => {
        if(!isPaused) {
            if(interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000);
   

        return () => clearInterval(interval.current);
    }, [isPaused]);
    useEffect(() => {
        setMillis(MinutesToMiils(minutes))
    }, [minutes])
    return (
        <Text style={styles.text}>{formatTime(minutesTotal)}:{formatTime(secondes)}</Text>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        fontWeight:'bold',
        padding: spacing.lg,
        color: colors.white,
        backgroundColor: 'rgba(94, 132, 226, 0.3)',
        marginTop:spacing.md,
        textAlign:'center'
    }
})
export default Countdown;