import React, {useState, useContext} from 'react'
import {View, StyleSheet} from 'react-native'
import {Input, Button, Text} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'

const SignupScreen = ({navigation})=>{
    const [state, singup] = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View style={styles.container}>       
            <Spacer>
                <Text h3>Sing up for Tacker</Text>
            </Spacer>     
            <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <Spacer/>
            <Input 
                secureTextEntry // === secureTextEntry = {true}
                //deixa o texto coberto por segurança ja que é uma senha
                label="Password"
                value={password}
                onChangeText = {setPassword}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
            <Spacer>
                <Button title="SingUp"/>
            </Spacer>    
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    //navigationOptions muda como a tela é apresentada ao usuário
    return {
      header: () => false //esconde o cabeçalho que este possui por padrao
    }
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        marginBottom:200,
        justifyContent: 'center',
    }
})

export default SignupScreen