import  React, { useState, } from "react";

import Details from "./Details";
import ProblemDescription from "./ProblemDescription";
import Preferences from "./Preferences";
import Budget from "./Budget";
import Availability from "./Availability";
import Review from "./Review";
import Landing from "./Landing"


const LANDING = "LANDING";
const DESCRIPTION ="DESCRIPTION";
const DETAILS= "DETAILS";
const PREFERENCES = "PREFERENCES";
const BUDGET = "BUDGET";
const AVAILABILITY = "AVAILABILITY";
const REVIEW = "REVIEW";

export default function PostAd(props){


  const [mode,setMode]=useState('DESCRIPTION');

  //transitioning function
  function transition(newMode){
      setMode(newMode)
  }


  //posting function
  function post() {

  }

  //back function


  return(
    <>
    { mode === "LANDING" && <Landing onStrat={transition}/>}
    { mode === "DESCRIPTION" && <ProblemDescription onBack={transition} onNext={transition}/>}
    { mode === "DETAILS" && <Details onBack={transition} onNext={transition}/> } 
    { mode === "PREFERENCES" && <Preferences onBack={transition} onNext={transition}/> } 
    { mode === "PUDGET" && <Budget onBack={transition} onNext={transition}/> } 
    { mode === "AVAILABILITY" && <Availability onBack={transition} onNext={transition}/> } 
    { mode === "REVIEW" && <Review onBack={transition} OnPost={post}/> } 
    
    </>  )
}