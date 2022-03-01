import React from 'react';

import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import {Header} from './components/';
import {Home, Cart} from './pages';

import { setPizzas } from './redux/actions/pizzas';

// function App() { 

//   React.useEffect(()=>{
    // axios.get('http://localhost:3000/db.json').then(({data})=>{
    //   setPizzas(data.pizzas);
    // })
//   }, [])
  
//   return 
// }
class App extends React.Component {
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data})=>{
      // store.dispatch(setPizzas(data.pizzas));
    })
  }
  render(){
    return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={[]} />}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
