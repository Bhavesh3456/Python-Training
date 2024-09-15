import { Link, Outlet } from "react-router-dom"
function Ser(){
    return(
        <>
     
        <h1>Service</h1>
        <Link to='/service/sor1'>ok</Link>
        <Outlet></Outlet>
        </>
    )
}
export default Ser