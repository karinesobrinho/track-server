import React, { useContext, useCallback} from 'react'
import { StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import Maps from '../components/Maps'
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import '../Location'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hook/useLocation'
import TrackForm from '../components/TrackForm'
import '../context/LocationContext'

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)
  const callback = useCallback(
    location => {
      addLocation(location, state.recording)
    },
    [state.recording]
  )
  const [err] = useLocation(isFocused, callback);

 
    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>TrackCreateScreen</Text>
            <Maps/>
            {err ? <Text>Erro ao localizar</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({})

export default withNavigationFocus(TrackCreateScreen)