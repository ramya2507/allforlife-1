import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Login from './customer/Login';
import Register from './customer/Register';
import PostAd from './PostAd';
import LoginDecision from './LoginDecision';
import RegisterDecision from './RegisterDecision';
import ProviderLogin from './provider/ProviderLogin';
import ProviderRegister from './provider/ProviderRegister';
import { decodeUser } from '../util/index';
import Home from './Home';
import ProposalAd from "./ProposalAd";
import ProposalForm from "./ProposalAd/ProposalForm";

const userFromStorage = decodeUser();

function App() {
  
  const [loggeduser,setUser]= useState(userFromStorage);
  //const [loggedInCustomer, setLoggedInCustomer] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Header setLoggedIn={setLoggedIn} user={loggeduser} setUser={setUser}/>
      <Switch>
        <Route path="/providerlogin" exact>
         <ProviderLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} /> 
        </Route>
        <Route path="/providerregister" exact>
          <ProviderRegister loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route path="/customerlogin">
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} /> 
        </Route>
        <Route path="/customerregister">
          <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route path="/" exact>
          <Home user={loggeduser}/>
        </Route>
        <Route path="/postAd">
         <PostAd  user={loggeduser}/>
        </Route>
        <Route path="/proposal">
          <ProposalAd  setUser={setUser}/>
        </Route>
        <Route path="/ProposalForm/:id">
          <ProposalForm />
        </Route>
      </Switch>
      <Footer />
    </Router>
  
  );
}

export default App;