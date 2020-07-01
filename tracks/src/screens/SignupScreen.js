import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)


  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign up - Tracker"
        errorMessage= {state.errorMessage}
        onSubmit= {signup} 
        submitButtonText="Sign up"
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
          <Spacer>
             <Text style={styles.link}> Caso não tenha conta se inscreva!</Text> 
          </Spacer>
      </TouchableOpacity>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
    //navigationOptions muda como a tela é apresentada ao usuário
  return {
    header: () => false //esconde o cabeçalho que este possui por padrao
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  link: {
      color: 'blue',
  }
})

export default SignupScreen