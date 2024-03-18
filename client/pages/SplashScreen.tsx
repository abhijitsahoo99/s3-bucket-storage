// SplashScreen.tsx
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function SplashScreen() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'KumbhSans-Regular': require('../assets/fonts/KumbhSans-Regular.ttf'),
      });
    }

    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PiX</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ede3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'KumbhSans-Regular',
    fontSize: 64,
    fontWeight: 'bold'
  },
});
