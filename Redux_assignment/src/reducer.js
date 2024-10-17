import {createSlice} from '@reduxjs/toolkit'
import { user } from './user'

 const f=createSlice({
    name:'emp',
    initialState:user,
    reducers:{
        addition:(state,action)=>{
            state.push(action.payload)
            // console.log(action);
            

        },
        edit:(state,action)=>{
            const {id,name}=action.payload
           const f= state.find(v=>v.id==id)
           if(f){
            f.id=id
            f.name=name
           }

            

        },
        del:(state,action)=>{
            const {id}=action.payload
            const v=state.find(v=>v.id==id)
            if(v){
                return state.filter((v)=>{return v.id !== id})
            }
            
        }

    }
})
export const {edit,del,addition}=f.actions
export default f.reducer