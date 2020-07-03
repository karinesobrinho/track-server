import React, {useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import NavLink from '../components/NavLink'
import AuthForm from '../components/AuthForm'
import {Context} from '../context/AuthContext'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = ()=>{
    const {state, signin, clearErrorMessage} = useContext(Context)
    return(
        <View style={styles.container}>
            <NavigationEvents 
                onWillFocus={clearErrorMessage} //onWillFocus === assim q vc aperta o botao p fazer a troca de tela
                // onDidFocus === quando a tela nova ja carregou 
                //onWillBlur === vai fazer a transição p tela anterior
                //onDidBlur === ja fez a transição p tela anterior
            />
            <AuthForm
                headerText="Sign in screen"
                errorMessage= {state.errorMessage}
                onSubmit={signin} 
                submitButtonText="sign in"
            />
            <NavLink
                text="Ainda não te conta? Cadastre-se!"
                routeName="Signup"
            />
            
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    //navigationOptions muda como a tela é apresentada ao usuário
  return {
    header: () => false //esconde o cabeçalho que este possui por padrao
  }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
      },
})

export default SigninScreen