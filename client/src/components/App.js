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

const userFromStorage = decodeUser();

function App() {
  
  const [loggeduser,setUser]= useState(userFromStorage);

  return (
    <Router>
      <Header user={loggeduser} setUser={setUser}/>
      <Switch>
        <Route path="/providerlogin" exact>
         <ProviderLogin setUser={setUser} /> 
        </Route>
        <Route path="/providerregister" exact>
          <ProviderRegister user={loggeduser} setUser={setUser} />
        </Route>
        <Route path="/customerlogin">
          <Login setUser={setUser} /> 
        </Route>
        <Route path="/customerregister">
          <Register setUser={setUser} />
        </Route>
        <Route path="/register" exact>
          {!loggeduser && <RegisterDecision setUser={setUser} />}
        </Route>
        <Route path="/login" exact>
          {!loggeduser && <LoginDecision setUser={setUser} />}
        </Route>
        <Route path="/" exact>
          <PostAd  user={loggeduser}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  
  );
}

export default App;