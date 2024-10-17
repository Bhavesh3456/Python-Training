import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { edit } from "./reducer"

function Update(){
    const {id}=useParams()
    const d=useSelector(state=>state.proper)
    const dispatch=useDispatch()
    const nav=useNavigate()
    const f=d.filter(v=>v.id == id)
    const {name}=f[0]
    const [unmae,setName]=useState(name)
    const handleedit=(e)=>{
        e.preventDefault()
        dispatch(edit({id:id,name:unmae}))
        nav('/')

        
    }

    return(
        <>
        <form action="" onSubmit={handleedit}>
            <input type="text" name="" id="" value={unmae} onChange={(e)=>setName(e.target.value)} />
            <input type="submit" name="" id="" />
        </form>
        </>
    )
}
export default Update