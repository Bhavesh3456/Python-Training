import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Contact from './componets/Conatact';
import Navbar from './componets/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Products from './componets/Product';
import Signin from './componets/signup';
import Registration from './componets/Login';
import Addcart from './componets/Addcart';
import { Asd } from './componets/signup'
import { lazy, Suspense, useState } from 'react';
import Messaging from './componets/messages';
import About from './componets/about';
import Loading from './componets/Loading';

function App() {
  const [uname,setname]=useState("")
  const managing=(s)=>{
    setname(s)
  }
  const Abc=lazy(()=>import('./componets/Addcart'))
  return (
    <div className="App">

      <BrowserRouter>
        <Messaging abc={uname}/>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/Contact' element={<Suspense fallback={<h1>Loading</h1>}>
            <Contact/>
          </Suspense>}></Route>
          <Route path='/Products' element={<Suspense fallback={<h1>Loading</h1>}>
            <Products/>
          </Suspense>}></Route>
          <Route path='/Sign' element={<Signin bypass={managing} />}></Route>
          <Route path='/Log' element={<Suspense fallback={<h1>Loading..</h1>}>
            <Registration/>
          </Suspense>}></Route>
          <Route path='/cart' element={<Suspense fallback={<Loading/>}>
            <Abc/>
          </Suspense>}></Route>
          <Route path='/About' element={<About />}></Route>
          {/* <Route path='/Signup' element={<Signin/>}></Route>
        <Route path='/Login' element={<Registration/>}></Route> */}
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
