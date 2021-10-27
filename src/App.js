import './App.css';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
import InsurancePage from './pages/insurancepage';
import NotFoundPage from './pages/notfoundpage';
import TrailerPage from './pages/trailerpage';
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <SideBar isOpen={isOpen} toggle={toggle} />
          <NavBar toggle={toggle} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/howitworks' component={HowItWorks} />
            <Route exact path='/faq' component={FAQ} />
            <Route exact path='/learn' component={Learn} />
            <Route exact path="/privacypolicydoc" component={PP} />
            <Route exact path="/termsofservicedoc" component={ToS} />
            <Route exact path="/insurance" component={InsurancePage} />
            <Route exact path="/trailer/:id" component={TrailerPage} />
            <Route exact path="/trailer" component={TrailerPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </div>
        <ToastContainer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
