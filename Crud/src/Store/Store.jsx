import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Reducers/userReducer';



//configureStore ile de store oluşturulur
const store = configureStore({
    reducer: {
        //store da stateler tutulur ve reducerları parametre olarak alır
        users: userReducer

    }
})

export default store;