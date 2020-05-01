import React from 'react';
import './App.css'
import Tweet from './Tweet/Tweet';

function App() {
  return(
    <div className="App">
      <Tweet name="Jose" message="This is a random message"/>
      <Tweet name="Davi" message="Get me in the gym"/>
      <Tweet name="Brayo" message="Hanging with the ladies today"/>
      <Tweet name="Kaka" message="You gotta bring your 'A' game"/>
    </div>
  )
}

export default App;
