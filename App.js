import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './src/screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
const Stack = createStackNavigator();



const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};
export default App;
