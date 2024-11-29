import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'

const HomeScreen1 = () => {
  const {colors} = useTheme();
  const navigation = useNavigation();
  
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:colors.text}}>gyuhgfhjgfhgjkhfggjhfgf</Text>
      <Button title='go to next' onPress={() => navigation.navigate('HomeScreen2')} />
    </View>
  )
}

export default HomeScreen1