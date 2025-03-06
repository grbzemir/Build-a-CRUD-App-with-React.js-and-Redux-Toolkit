import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../Data/UserList";


const UserSlice = createSlice({
    name: "users",
    initialState: UserList,
    reducers: {

    }
})

export default UserSlice.reducer