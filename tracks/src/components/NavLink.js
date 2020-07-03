import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Spacer from './Spacer'
import {withNavigation} from 'react-navigation'

const NavLink = ({navigation, text, routeName})=>{
    return(
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate(routeName)}>
                <Spacer>
                    <Text style={styles.link}>{text}</Text> 
                </Spacer>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    link: {
        color: 'blue',
    },
})

export default withNavigation(NavLink)