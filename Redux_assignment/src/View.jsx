import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

function View(){
    const {uid}=useParams()
    const abc=useSelector(state=>state.proper)
    const s=abc.filter(v=>v.id==Number(uid))
    const {id,name}=s[0]

    return(
        <>
        <Link to='/'>Go Back</Link>
        <h1>ID : {id}</h1>
        <h1>Name: {name}</h1>
        </>
    )
}
export default View