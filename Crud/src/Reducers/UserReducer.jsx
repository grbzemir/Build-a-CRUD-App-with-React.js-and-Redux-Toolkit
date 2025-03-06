import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../Data/UserList";


const UserSlice = createSlice({
    name: "users",
    initialState: UserList,
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            // state.push(action.payload)
        },
        // deleteUser: (state, action) => {
        //     return state.filter(user => user.id !== action.payload)
        // },
        // updateUser: (state, action) => {
        //     const index = state.findIndex(user => user.id === action.payload.id)
        //     state[index] = action.payload
        // }
    }
})

export const { addUser, deleteUser, updateUser } = UserSlice.actions
export default UserSlice.reducer
