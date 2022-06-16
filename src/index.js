import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';

// from React 17 and prior
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// new method of rendering using createRoot via React 18
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);