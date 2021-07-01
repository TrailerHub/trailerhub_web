import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home.js';
import ToS from './pages/tos';
import PP from './pages/pp';
import HowItWorks from './pages/howitworks';
import React, { useState } from 'react'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FAQ from './pages/faq';
import Learn from './pages/learn';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <div>
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/howitworks' component={HowItWorks} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/learn' component={Learn} />
          <Route exact path="/privacypolicydoc.html" component={PP} />
          <Route exact path="/termsofservicedoc.html" component={ToS} />
        </Switch>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;