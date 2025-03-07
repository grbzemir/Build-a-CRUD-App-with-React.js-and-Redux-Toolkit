import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../Reducers/UserReducer';



//configureStore ile de store oluşturulur
const store = configureStore({
    reducer: {
        //store da stateler tutulur ve reducerları parametre olarak alır
        users: UserReducer

    }
})

export default store;