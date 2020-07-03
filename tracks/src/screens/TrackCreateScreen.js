import React, {useEffect, useState} from 'react'
import { StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import Maps from '../components/Maps'
import {SafeAreaView} from 'react-navigation'
import {requestPermissionsAsync} from 'expo-location'

const TrackCreateScreen = ()=>{
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync()
          if (!granted) {
            throw new Error('Location permission not granted')
          }
        } catch (e) {
          setErr(e)
        }
    }

    useEffect (()=>{
        startWatching()
    }, [])

    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>TrackCreateScreen</Text>
            <Maps/>
            {err ? <Text>Erro ao localizar</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({})

export default TrackCreateScreen