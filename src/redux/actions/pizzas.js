import axios from "axios";

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (catIndex) => (dispatch) => { // Redux Thunk
    dispatch(setLoaded(false));
    if(catIndex != null){
      catIndex++;

      axios.get(`http://localhost:3001/pizzas?category=${catIndex}`).then(({data})=>{
        dispatch(setPizzas(data));
      });
    }
    else {
      axios.get(`http://localhost:3001/pizzas`).then(({data})=>{
        dispatch(setPizzas(data));
      });
    }
    
}

export const setPizzas = (items) =>({
    type: 'SET_PIZZAS', 
    payload: items
});
