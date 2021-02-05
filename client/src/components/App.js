import React , {useState} from "react";
import './App.css';
import Header from "./Header";
import JobPost from "./Jobpost/Index";


function App() {

const [user,setUser]= useState(null);

  return (
  <>
    <Header />
    <JobPost/>
  </> );
}

export default App;
