import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Index from "./Home";
import Ser from "./Service";
import Ser1 from "./ser12";
function Createlink(){
    return(
        <>
        <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/service'>Service</Link>
        <Routes>
            <Route path="/" element={<Index/>}></Route>
            <Route path="/service" element={<Ser/>}><Route path="/service/sor1" element={<Ser1/>}></Route></Route>
        </Routes>
        </BrowserRouter>
        </>
    )

}
export default Createlink