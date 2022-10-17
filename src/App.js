import logo from './logo.svg';
import './App.css';
import Navbar from './comps/Navbar';
import Main1 from './comps/Main1';
import Main2 from './comps/Main2';
import Main3 from './comps/Main3';
import Main4 from './comps/Main4';
import Footer from './comps/Footer';
import React, {useState} from 'react';
import About from './comps/About';
import Main from './comps/Main';
import Find from './comps/Find';
import Blog from './comps/Blog';
import Join from './comps/Join';
import Contact from './comps/Contact';

function App() {

  const [accounts, setAccounts] = useState([]);

  let Component
  switch (window.location.pathname) {
    case "/main":
      Component = Main
      break
    case "/about":
      Component = About
      break
    case "/find":
      Component = Find
      break
    case "/blog":
      Component = Blog
      break
    case "/join":
      Component = Join
      break
    case "/contact":
      Component = Contact
      break
    default:
      Component = Main
  }

  return (
    <div className="App">
      <Navbar accounts={accounts} setAccounts={setAccounts}/>
      <Component accounts={accounts} setAccounts={setAccounts}/>
    </div>
  );
}



export default App;
