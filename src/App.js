import React from 'react';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import User from './components/User'
import UserBoard from './components/UserBoard'

function App() {
  return (
    <div className="App">
      <p>Welcome to Codaisseur</p>
      <Title content="Some Simple Title" />
      <LightSwitch /><br /><br />
      <UserBoard />
      <User name="Alice" />
      <User name="Bob" />
      <User name="Charles" />
    </div>
  );
}

export default App;
