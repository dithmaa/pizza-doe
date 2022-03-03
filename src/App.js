import React from 'react';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import {Header} from './components/';
import {Home, Cart} from './pages';

import { setPizzas } from './redux/actions/pizzas';

function App() {  // 56:40 - items не используется в app js а только в Home
  
  const dispatch = useDispatch();

  React.useEffect(()=>{
    axios.get('http://localhost:3001/pizzas').then(({data})=>{
      dispatch(setPizzas(data));
    })
  }, []); 
  
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
  )
}


export default App;
