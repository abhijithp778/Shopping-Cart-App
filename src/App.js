import logo from './logo.svg';
import './App.css';
import Addprdt from './components/Addprdt';
import ViewAll from './components/ViewAll';
import Searchprdt from './components/Searchprdt';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Addprdt/>}/>
     <Route path='/search' element={<Searchprdt/>}/>
     <Route path='/view' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter> 

  );
}

export default App;
 