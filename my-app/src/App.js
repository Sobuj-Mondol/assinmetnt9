import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';

import Blog from './component/Blog/Blog';
import DASHBORD from './component/DASHBORD/DASHBORD';
import NotFound from './component/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
     <Route path="/" element={<Home></Home>}> </Route>
     <Route path='Reviews/' element={<Reviews></Reviews>}></Route>
      <Route path='DASHBORD/' element={<DASHBORD></DASHBORD>}></Route>
      <Route path='Blog/' element={<Blog></Blog>}> </Route>
     
     <Route path="*" element ={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}
export default App;
