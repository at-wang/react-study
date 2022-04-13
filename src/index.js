import React from "react";
//import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
// 导入react-router-dom


// React@18版本的写法，否则控制台会报错(看着烦)
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */
