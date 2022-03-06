import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {Header} from './components/';
import {Home, Cart} from './pages';



function App() {  // 56:40 - items не используется в app js а только в Home
  
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
