import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';

const HomeScreen2 = () => {
  const {colors} = useTheme();

  return (
    <View>
      <Text style={{color:colors.text}}>gyuhgfhjgfhgjkhfggjhfgf</Text>
      </View>
  )
}

export default HomeScreen2