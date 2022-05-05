/*
* 入口js
*/
import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./App";

//ReactDOM.render(<App/>, document.getElementById('root'))
// React@18版本的写法，否则控制台会报错(看着烦)
createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);