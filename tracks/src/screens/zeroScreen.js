import React, {useEffect, useContext} from 'react'
import {Context as AuthContext} from '../context/AuthContext'

const zeroScreen = ()=>{
    const {tryLocalSignin} = useContext(AuthContext)

    useEffect(()=>{
        tryLocalSignin()// autenticação de login antes de mostrar as telas iniciais
    }, [])
    return null
}

export default zeroScreen