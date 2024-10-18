import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todoos:[]
}

export const todooSlice=createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addtodoo:(state,action)=>{
            state.todoos.push({
                title:action.payload,
                status:false
            })
        },
        deletetodoo:(state,action)=>{
            state.todoos.splice(action.payload,1)
        },
        statustodoo:(state,action)=>{
            // var temp=[...state,{state,status:false}]
            // state.temp.push(action.payload)
            // state.todoos.push(  )
            state.todoos.map((x,i)=>{
                if(i===action.payload){
                    return x.status=!x.status
                }
            })



        }
    }
})
export const{deletetodoo,addtodoo,statustodoo}=todooSlice.actions
const todooReducer=todooSlice.reducer
export default todooReducer