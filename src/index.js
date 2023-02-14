import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loading from './Component/Loading';
import {RoomContextProvider} from "./RoomContextProvider.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomContextProvider>
    {/*<Loading/>||<App />*/}
    <App />
  </RoomContextProvider>
);

