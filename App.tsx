import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { BookDetails } from './src/screens'
import Tabs from './src/navigation/tabs'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/styles/theme'

const Stack = createStackNavigator()

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={''}
        >
          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />

          <Stack.Screen
            name="BookDetails"
            component={BookDetails}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
