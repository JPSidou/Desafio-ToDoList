import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {Home} from './src/screens';
import { useFonts, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';


export default function App() {
  const [fontsLoaded] = useFonts({Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_700Bold});
  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
}
  return (
    <>
    <StatusBar style="light" translucent backgroundColor='transparent'/>
      <Home/>
    </>  
  );
}
