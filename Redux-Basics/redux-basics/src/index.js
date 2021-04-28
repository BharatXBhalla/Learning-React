import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducer from "./reducers/index";
import {Provider} from "react-redux";


// //STORE --> GLobalized Object

// //ACTION INCREAMENT
// const increment = () =>{
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// //REDUCER --> Maps(State,Action)-> Next State
// const counter = (state = 0, action) =>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state+1;
//     case 'DECREMENT':
//       return state-1;
//     default:
//       return state;
//   }
// }

// let store=createStore(counter);

// //DISPATCH --> Displaces Event

// store.subscribe(() => {  console.log(store.getState()); });

// store.dispatch(increment());

// store.dispatch(decrement());

let store=createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
store.subscribe(() => {  console.log(store.getState()); });



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
