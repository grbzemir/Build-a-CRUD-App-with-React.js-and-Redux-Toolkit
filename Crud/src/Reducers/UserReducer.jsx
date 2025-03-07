import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../Data/UserList";


const UserSlice = createSlice({
    name: "users",
    initialState: UserList,
    reducers: {
        addUser: (state, action) => {
            // console.log(action);
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            const { id, name, email } = action.payload
            const uu = state.find(user => user.id === id)
            if (uu) {
                return state.filter(f => f.id !== id)
            }
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const uu = state.find(user => user.id === id)

            if (uu) {
                uu.name = name;
                uu.email = email;
            }

        }
    }
})

export const { addUser, deleteUser, updateUser } = UserSlice.actions;

export default UserSlice.reducer
