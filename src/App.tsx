import React from 'react';
import InputComponent from './components/Input/Input';

import { centeredDiv } from './StylesConstants/StylesConstants';

function App() {

  const container = {
    ...centeredDiv,
    height: '100dvh'
  }
  
  return (
    <div style={container}>
      <InputComponent />
    </div>
  );
}

export default App;
