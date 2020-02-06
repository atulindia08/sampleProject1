import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducerA from './Reducer/RA';
import reducerB from './Reducer/RB';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
//import reducer from './Reducer/index';


const rootReducer = combineReducers({
    rA:reducerA,
    rB:reducerB,
})
const store = createStore(rootReducer);

store.subscribe(()=>{
 console.log("data---in subscribe",store.getState())
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
