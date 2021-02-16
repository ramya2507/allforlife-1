import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Login from './customer/Login';
import Register from './customer/Register';
import PostAd from './PostAd';
import ProviderLogin from './provider/ProviderLogin';
import ProviderRegister from './provider/ProviderRegister';
import { decodeUser } from '../util/index';
import Home from './Home';
import ProposalForm from "./ProposalAd/ProposalForm";

const userFromStorage = decodeUser();

function App() {
  
  const [loggeduser,setUser]= useState(userFromStorage);
  const [loggedIn, setLoggedIn] = useState(false);
  //to check if customer is logged or not 
  const [ isCustomer, setIsCustomer] = useState(false);
  

  

  return (
    <Router>
      <Header 
        setLoggedIn={setLoggedIn} 
        user={loggeduser} 
        setUser={setUser}
        isCustomer={isCustomer}
        setIsCustomer={setIsCustomer}
      />
      <Switch>
        <Route path="/login/provider" exact>
         <ProviderLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} /> 
        </Route>
        <Route path="/register/provider" exact>
          <ProviderRegister loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route path="/login/customer" exact>
          <Login 
            setIsCustomer={setIsCustomer} 
            loggedIn={loggedIn} 
            setLoggedIn={setLoggedIn} 
            setUser={setUser} 
          /> 
        </Route>
        <Route path="/register/customer" exact>
          <Register 
            setIsCustomer={setIsCustomer} 
            loggedIn={loggedIn} 
            setLoggedIn={setLoggedIn} 
            setUser={setUser} 
          />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/postAd" exact>
          {<PostAd  user={loggeduser}/>} 
        </Route>
        <Route path="/proposalform/:id" exact>
         { (loggedIn && !isCustomer) ?
            <ProposalForm user={loggeduser}/> :
            <Redirect to="/login/provider"/> 
          }
        </Route>
      </Switch>
      <Footer />
    </Router>
  
  );
}

export default App;