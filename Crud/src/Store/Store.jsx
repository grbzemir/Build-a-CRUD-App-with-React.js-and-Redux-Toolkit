import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'


//configureStore ile de store oluşturulur
const store = configureStore({
    reducer: {
        //store da stateler tutulur ve reducerları parametre olarak alır
        users: useReducer

    }
})