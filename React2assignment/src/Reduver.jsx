import { useReducer, useState } from "react"


function Throw(){
    const [a,seta]=useState("")
    const initial={store:[]}
    const ab=(first,second)=>{
        
        
        switch(second.name){
            case 'you':
                return {store:[...first.store,a]}
            default:
                return first
        }
        

    }
    const [t,dispatch]=useReducer(ab,initial)
    return(
        <>
        <input type="text" name="" id="" onChange={(e)=>{seta(e.target.value)}} />
        <button onClick={()=>{dispatch({name:"you"})}}>add</button>
        <li>{a}</li>
        
        </>
    )
}
export default Throw