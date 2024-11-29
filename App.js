import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen1 from './src/HomeScreen1';
import HomeScreen2 from './src/HomeScreen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { theme } from './src/navigation/MyTheme';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer theme={theme()}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})