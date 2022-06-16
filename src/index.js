import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import AuthReducer from './store/reducer/auth';
import RealStateReducer from './store/reducer/RealState';
import WorkSampelReducer from './store/reducer/workSampel';
import RequestReducer from './store/reducer/Request';
import AppointmentReducer from './store/reducer/Appointment';
import MarkReducer from './store/reducer/Mark';
import ReviweReducer from './store/reducer/Reviwe&Rate';
import {HelmetProvider} from 'react-helmet-async'


const rootReducer = combineReducers({
    auth:AuthReducer,
    realstate:RealStateReducer,
    sampel: WorkSampelReducer,
    request: RequestReducer,
    appointment: AppointmentReducer,
    mark: MarkReducer,
    rate: ReviweReducer
})

const  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware( thunk)));

ReactDOM.render(
  <HelmetProvider>
  <Provider
  store={store}
  >

    <BrowserRouter>
    <App /> 
    </BrowserRouter>
    </Provider></HelmetProvider> ,
  document.getElementById('root')
);
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate( <Provider
//     store={store}
//     >
//       <BrowserRouter>
//       <App /> 
//       </BrowserRouter>
//       </Provider>, rootElement);
// } else {
//   render( <Provider
//     store={store}
//     >
//       <BrowserRouter>
//       <App /> 
//       </BrowserRouter>
//       </Provider>, rootElement);
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
