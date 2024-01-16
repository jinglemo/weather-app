import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [isLoading, error, weather] = useGetWeather()

  console.log(isLoading, weather, error)
  if (weather && weather.list && !isLoading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
export default App
