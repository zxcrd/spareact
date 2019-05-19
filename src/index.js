import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import './index.css'


//由于要使用路由来管理组件，所以这里render不能直接渲染App,而是要使用路由标签包裹起来
ReactDOM.render(
    (<BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
