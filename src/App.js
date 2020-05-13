import React, {useState} from 'react';
import { Router } from '@reach/router';
import Home from './components/home';
import People from './components/people';
import Planets from './components/planets';


function App() {
  const [state, setState, num] = useState('');
  let id ={
    page: "",
    num: ""
  }

  return (

    <div className='container'>
      <Router>
        <Home path= '/' state={state} setState={setState} id={id}/>
        <People path= '/people/:num' state={state} num={num} />
        <Planets path= '/planets/:num' state={state} num={num} />
      </Router>
    </div>
  );
}

export default App;
