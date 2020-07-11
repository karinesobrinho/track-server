//tools:
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
//telas:
import AccountScreen from './src/screens/AccountScreen'
import TrackDetailscreen from './src/screens/TrackDetailScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import zeroScreen from './src/screens/zeroScreen'
//objetos:
import {Provider as AuthProvider} from './src/context/AuthContext'
import {setNavigator} from './src/navigatorRef'
import {Provider as LocationProvider} from './src/context/LocationContext'

const SwitchNavigator = createSwitchNavigator({
  zero: zeroScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    TrackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailscreen,
    }),
    Account: AccountScreen,
    TrackCreate: TrackCreateScreen,
  })
} /* ,{
  initialRouteName:'', //tela inicial
  defaultNavigationOptions:{
    title: '' //titulo do topo da tela
  }
}*/)

const App = createAppContainer(SwitchNavigator)

export default () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator)=> {setNavigator(navigator)}} />
      </AuthProvider>
    </LocationProvider>
  )
}