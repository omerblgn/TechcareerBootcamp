import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { favoriteReducer } from './store/reducer/favorite.reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(favoriteReducer)

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);