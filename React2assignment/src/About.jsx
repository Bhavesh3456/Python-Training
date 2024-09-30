import { Link, Outlet } from "react-router-dom"

function About(){
    return(
        <>
        <h1>hii</h1>
        <Link to='/about/a1'>About1</Link>
        <Outlet></Outlet>
        </>
    )
}
export default About