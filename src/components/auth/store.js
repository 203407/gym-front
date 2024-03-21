import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './userSlice.js'


 export const store = configureStore({
    reducer:{
        user : userReducer
    }
 })

export const saveUser = () => {    
    const state = store.getState()
    localStorage.setItem('USER', JSON.stringify(state))
}


