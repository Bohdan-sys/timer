import React, { useContext } from 'react';
import './sass/App.sass';

import { TimerContextProvider } from './contexts/TimerProvider';
import { Display } from './components/Display'
import { Control } from './components/Control';


function App() {

  return (


    <div className='App'>
      <div className='container'>
        <TimerContextProvider>
          <Display />
          <Control />
        </TimerContextProvider>

      </div>

    </div>
  );
}

export default App;
