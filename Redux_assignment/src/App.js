
import './App.css';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import Index from './Home';
import Update from './Edit';
import Adding from './Add';
import View from './View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Routes >
        <Route path='/' element={<Index/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
        <Route path='/add' element={<Adding/>}></Route>
        <Route path='/view/:uid' element={<View/>}></Route>
        
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
