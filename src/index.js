import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
console.log('env is', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = "https://pin-pin-mapper.herokuapp.com/:3000";
}
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
