import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillFocus={clearErrorMessage}
      />
      <AuthForm 
        headerText="Sign up - Tracker"
        errorMessage= {state.errorMessage}
        onSubmit= {signup} 
        submitButtonText="Sign up"
      />
      <NavLink
        text="Já tem cadastro? Faça login!" 
        routeName= "Signin"
      />
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
})

export default SignupScreen