import react , {useState} from "react";
import './App.css';
import Footer from  "./Footer";
import Header from "./Header";
import PostAd from "./PostAd";


import Login from "./customer/Login"
import Register from "./customer/Register";


function App() {

const [user,setUser]= useState(null);

  return (
  <>
    <Header />
    {!user && <PostAd setUser={setUser}/>}
    {user && <h1>Hi {user.first_name} !</h1>}
    <Footer />
  </> );
}

export default App;