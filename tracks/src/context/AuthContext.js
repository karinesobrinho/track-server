import {AsyncStorage} from 'react-native' //armazenamento não criptografado, assincrono, persistente
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {navigate} from '../navigatorRef'
import tracker from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    //case 'signin' === case 'signup'
    case 'signin':
      return {errorMessage: '', token: action.payload}
    case 'clear_error_message':
      return {...state, errorMessage:''}
    case 'signout':
      return {token: null, errorMessage:''}
    default:
      return state
  }
}

const tryLocalSignin = dispatch => async () =>{
  const token = await AsyncStorage.getItem('token') //entrar direto no app se tiver o token
  if (token){
    dispatch({ type:'signin', payload: token})
    navigate('TrackList')
  } else{
    navigate('Signup')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
}

const signup = dispatch => {
    // solicitação de autenticação
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem( 'token', response.data.token) //armazena a info 
        dispatch ({type: 'signin', payload: response.data.token})

        navigate('TrackList')
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Algo deu errado'
      })
    }
  }
}

const signin = dispatch => {
  return  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signin', {email, password})
      await AsyncStorage.setItem( 'token', response.data.token) //armazena a info 
      dispatch ({type: 'signin', payload: response.data.token})
      navigate('TrackList') // trocas de tela em caso de sucesso no login
    } catch (error) {
      dispatch({
        type: 'add_error',
        payload: 'Algo deu errado'  // mostrar msg de erro caso de errado
      })
    }
    // tentar entrar com conta ja existente
  }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'})
    // deslogar do app
    navigate('loginFlow')//voltar p aba de autenticação inicial
  }

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
)