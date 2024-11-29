import 'react-native-gesture-handler';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeScreen1 from './src/HomeScreen1';
import HomeScreen2 from './src/HomeScreen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import {useCustomTheme } from './src/navigation/MyTheme';

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = useCustomTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: theme.colors.background,
      border: theme.colors.border,
      card: theme.colors.card,
      notification: theme.colors.notification,
      primary: theme.colors.primary,
      text: theme.colors.text
    }

  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})