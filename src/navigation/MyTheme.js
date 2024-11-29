import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'blue',
    background: 'red',
    text: 'white',
  },
};

const MyLightTheme = {
  ...DefaultTheme,
  defaultColors: {
    ...DefaultTheme.colors,
    primary: 'red',
    background: 'green',
    text: 'red',
  },
};

export const theme = () => {
  const scheme = useColorScheme();
  return scheme === "dark" ? MyDarkTheme : MyLightTheme
}
