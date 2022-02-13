import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ApiContext from './context/api-context';
import { BrowserRouter } from 'react-router-dom';
import { createApi } from './api/api';

const api = createApi();

ReactDOM.render(
  <React.StrictMode>
    <ApiContext.Provider value={api}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
