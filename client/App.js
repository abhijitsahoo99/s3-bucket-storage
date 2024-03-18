import React, {useState, useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'KumbhSans-Regular': require('./assets/fonts/KumbhSans-Regular.ttf'),
          'InriaSerif-Regular': require('./assets/fonts/InriaSerif-Regular.ttf'),
          // Load other fonts here
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setFontsLoaded(true);
        // Simulate a delay for the splash screen
        setTimeout(() => setShowSplashScreen(false), 2000); // Adjust time as needed
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  if (showSplashScreen) {
    return <SplashScreen />;
  }

  return <HomePage />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});