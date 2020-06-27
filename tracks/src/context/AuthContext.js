import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signin = (dispatch) =>{
    return({email, password})=>{
        
        //signin ok === modificar state
        //signin error === msg de erro
    }   
}

const signup = (dispatch) =>{
    return async ({email, password})=>{
        // solicitação de autenticação
        try{
            const response = await TrackerApi.post('/singup',{email, password})
            console.log(response.data)
        } catch (err){
            console.log(err.message)
        }
    }
}

const signout = (dispatch)=>{
    return ()=>{

    }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signin, signout, signup},
  { isSignedIn: false }
);