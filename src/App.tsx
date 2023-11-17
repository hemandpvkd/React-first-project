import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import PostLoginRouter from './routes';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <PostLoginRouter/>
      </div>
    </Provider>
  );
}

export default App;
