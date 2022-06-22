import React from 'react'
import './App.css';
import Preview from './components/Preview/Preview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Login from './slices/Loginpage';


function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Header/>
      <Menu/>
      <Preview/> */}
    </div>
  );
}

export default App;
