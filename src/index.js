import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RoomContextProvider} from "./RoomContextProvider.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomContextProvider>
      <App />
  </RoomContextProvider>
);

