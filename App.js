import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Focus from './src/features/focus/focus';
import Timer from './src/features/timer/timer';
import {colors} from './src/utils/colors';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  return (
    <View style={styles.container}>
      {
        focusSubject ? 
        (
          <Timer setFocusSubject={setFocusSubject} focusSubject={focusSubject}/>
        ) : 
        (
          <Focus setFocusSubject={setFocusSubject}/>
        )
      }
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue
  }
})


