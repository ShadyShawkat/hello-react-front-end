import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        {' '}
        { greeting.message }
      </div>
    </div>
  );
};

export default Greeting;