import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:"",
    username:"",
    token:""
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action) =>{
            const {id,username,token} = action.payload
            state.id=id;
            state.username=username;
            state.token=token
        },
        delUser:(state) =>{
            state.id="";
            state.username="";
            state.token="";
        }
    }
})

export const { addUser, delUser} = userSlice.actions;
export default userSlice.reducer;