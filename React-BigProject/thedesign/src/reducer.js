import {createSlice} from '@reduxjs/toolkit'
const init={
    cart:[],
    quantity:0
}

const abc=createSlice({
    name:'user',
    initialState:init,
    reducers:{
        adding:(state,actions)=>{
            state.cart.push(actions.payload)
            
            
           
           
           

        },
        remove:(state,action)=>{
            const {id}=action.payload
            console.log(id);
            
            const f=state.cart.find(v=>v.id == id)
            if(f){
                state.cart =state.cart.filter((v)=>{return v.id !== id})
                
                
                
            }
        }
        
    }
    
})
export const {adding,remove}=abc.actions
export default abc.reducer