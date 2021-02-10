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
  /*  hooks  */
  const {mode, transition, back} = useVisualMode(DESCRIPTION)
  const [timeline, setTimeline] = useState(0)

  const [state, setState]=useState({
    appointmentFor:'',
    description:'',
    symptomes: [],
    therapy:'',
    insurance:'', 
    age:'' ,
    timeZones: '',
    sexuality:'',
    language:'',
    ethnicity:'',
    faith:'',
    country:'',
    typeOfPayment:'',
    minPrice:'',
    maxPrice:'',
    appointmentFrequency:'',
    timeRequirement:'',
    availabilityTo:'',
    availabilityFrom:''
 });
 /*  hooks end  */


 /* local functions start*/

function handleNextClick(mode) {
  transition(mode)
  setTimeline(prev => prev + 140)
}

function handleBackClick(mode) {
  console.log(state)
  back(mode)
  setTimeline(prev => prev - 140)

}

const handleChange = (event) => {
  const { name, value } = event.target
  setState({ ...state, [name]: value })
} 
function addSymptomes(newSymptomes) {
  setState({...state, symptomes :newSymptomes})
}

function post() {
 }

/* local functions end */

  return(
    <>
    { mode === "LANDING" && <Landing {...state} handleChange={handleChange} onNext={() =>transition(DESCRIPTION)}/>}
    { mode === "DESCRIPTION" && <ProblemDescription {...state} handleChange={handleChange} timeline={timeline} onBack={() =>handleBackClick(LANDING)} onNext={() =>handleNextClick(DETAILS)}/>}
    { mode === "DETAILS" && <Details {...state} handleChange={handleChange} addSymptomes={addSymptomes} timeline={timeline} onBack={() =>handleBackClick(DESCRIPTION)} onNext={() =>handleNextClick(PREFERENCES)}/> } 
    { mode === "PREFERENCES" && <Preferences {...state} handleChange={handleChange} timeline={timeline} onBack={() =>handleBackClick(DETAILS)} onNext={() =>handleNextClick(BUDGET)}/> } 
    { mode === "BUDGET" && <Budget {...state} handleChange={handleChange} timeline={timeline} onBack={() =>handleBackClick(PREFERENCES)} onNext={() =>handleNextClick(AVAILABILITY)}/> } 
    { mode === "AVAILABILITY" && <Availability {...state} handleChange={handleChange} timeline={timeline} onBack={() =>handleBackClick(BUDGET)} onNext={() =>handleNextClick(REVIEW)}/> } 
    { mode === "REVIEW" && <Review {...state} handleChange={handleChange} timeline={timeline} onBack={() =>handleBackClick(AVAILABILITY)} OnPost={post}/> } 
    
    </>  )
}