import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/Listitem'

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [{ main: 'Rain' }]
  },
  {
    dt_txt: '2022-08-30 16:01:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [{ main: 'Rain' }]
  },
  {
    dt_txt: '2022-08-30 16:02:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24
    },
    weather: [{ main: 'Rain' }]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <Text>UpcomingWeather</Text>
      <ImageBackground source={require('../../assets/clouds.jpg')} style={image}>
      <FlatList data={DATA} 
      renderItem={renderItem}
      keyExtractor={(item) => item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue',
  },

  image: {
  flex: 1
  }
})

export default UpcomingWeather
