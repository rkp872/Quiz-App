import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>    
       <Home/>
       </BrowserRouter>
    </Provider>
  );
}

export default App;
