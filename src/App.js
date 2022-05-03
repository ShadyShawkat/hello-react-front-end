import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

import Greeting from './components/Greeting';
import { getMessages } from './redux/greetings';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
      </header>
    </div>
  );
};

export default App;
