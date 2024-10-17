import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addition } from "./reducer"
import { useNavigate } from "react-router-dom"
let index=2
function Adding(){
    
    const [name,setName]=useState("")
    const dispatch=useDispatch()
    const nav=useNavigate()
    const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(addition({id:index++,name:name}))
        nav('/')

    }


    return(
        <>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="" >Name</label>
            <input type="text" name="" id="" style={{padding:"10px",marginLeft:"10px"}} onChange={(e)=>{setName(e.target.value)}} /><br/>
            <input type="submit" name="" id=""  style={{color:"white",backgroundColor:"green",padding:"5px"}} />
        </form>
        </>
    )
}
export default Adding