import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={50} color="black" />
        <Text style={temp}>21</Text>
        <Text style={feels}>feels 16</Text>
        <RowText
          messageOne={'high: 81'}
          messageTwo={'low: 67'}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={'Its Sunny'}
        messageTwo={'Its perfect t-shirt weather'}
        messageOneStyles={description}
        messageTwoStyles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    backgroundColor: 'pink',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 38
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
