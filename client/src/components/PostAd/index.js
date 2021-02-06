import  React, { useState, } from "react";

import Details from "./Details";
import ProblemDescription from "./ProblemDescription";
import Preferences from "./Preferences";
import Budget from "./Budget";
import Availability from "./Availability";
import Review from "./Review";
import Landing from "./Landing"

//helper filer
import useVisualMode from '../hooks/useVisualMode'

//DECLEARING CONSTANTS
const LANDING = "LANDING";
const DESCRIPTION ="DESCRIPTION";
const DETAILS= "DETAILS";
const PREFERENCES = "PREFERENCES";
const BUDGET = "BUDGET";
const AVAILABILITY = "AVAILABILITY";
const REVIEW = "REVIEW";


//PostAd component
export default function PostAd(props){

  const {mode, transition, back} = useVisualMode(DESCRIPTION)

  //posting function
  function post() {

  }

  return(
    <>
    { mode === "LANDING" && <Landing onStrat={() =>transition(DESCRIPTION)}/>}
    { mode === "DESCRIPTION" && <ProblemDescription onBack={() =>back(LANDING)} onNext={() =>transition(DETAILS)}/>}
    { mode === "DETAILS" && <Details onBack={() =>back(DESCRIPTION)} onNext={() =>transition(PREFERENCES)}/> } 
    { mode === "PREFERENCES" && <Preferences onBack={() =>back(DETAILS)} onNext={() =>transition(BUDGET)}/> } 
    { mode === "BUDGET" && <Budget onBack={() =>back(PREFERENCES)} onNext={() =>transition(AVAILABILITY)}/> } 
    { mode === "AVAILABILITY" && <Availability onBack={() =>back(BUDGET)} onNext={() =>transition(REVIEW)}/> } 
    { mode === "REVIEW" && <Review onBack={() =>back(AVAILABILITY)} OnPost={post}/> } 
    
    </>  )
}