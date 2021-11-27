import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemContextProvider from './contexts/ItemContext';
import LedContextProvider from './contexts/LedContext';
import {SocketProvider} from './contexts/SocketProvider';


ReactDOM.render(
  <SocketProvider>
    <LedContextProvider>
      <ItemContextProvider>
        <App />
      </ItemContextProvider>
    </LedContextProvider> 
  </SocketProvider>,
  document.getElementById('root')
);
