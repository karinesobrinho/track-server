import React, {useContext} from 'react'
import {StyleSheet, Text, ActivityIndicator} from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import {Context as LocationContext} from '../context/LocationContext'


const Maps  = ()=>{
  const {state: { currentLocation }} = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
    /*let points = []
    for (let i=0; i<20; i++){
       points.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001, 
       })
    }*/
    return (
      <MapView 
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        region ={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        >
          <Circle
            center = {currentLocation.coords}
            radius = {15}
            strokeColor =  "rgba(158, 158, 255, 0.1)" //cor da borda
            fillColor = "rgba(158, 158, 255, 0.3)" //cor de preenchimento
          />
        </MapView>
    )
} //        <Polyline coordinates={points} />

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
})

export default Maps