import {NavigationActions} from 'react-navigation'

let navigator

export const setNavigator = (nav)=>{
    navigator = nav
}

export const navigate = (routeName, params)=>{
    //routename === nomes que damos as telas nos atalhos
    //params === infos a serem passadas para a tela 
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}