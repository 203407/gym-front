import { createSlice } from "@reduxjs/toolkit";

const st = {
    id:'',
    username:'',
    token:'',
    time:''
}

let initialState = {}

const usuario = localStorage.getItem('USER')

if (JSON.parse(usuario) != null){
    const parses  =   JSON.parse(usuario) 
    initialState = parses.user
}else{
    initialState = st
}


export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action) =>{
            const {id,username,token,time} = action.payload
            state.id=id;
            state.username=username;
            state.token=token
            state.time=time
        },
        delUser:(state) =>{
            state.id='';
            state.username='';
            state.token='';
            state.time='';
        }
    }
})

export const { addUser, delUser} = userSlice.actions;
export default userSlice.reducer;