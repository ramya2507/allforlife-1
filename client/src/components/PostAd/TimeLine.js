import React from 'react';
import './TimeLine.css'

export default function Timeline() {

  return(
    <div id="progress-bar-container">
	<ul>
		<li class=""><div class="step-inner">Problem Description</div></li>
		<li class=""><div class="step-inner">Details</div></li>
		<li class=""><div class="step-inner">Preferences</div></li>
		<li class=""><div class="step-inner">Budget</div></li>
		<li class=""><div class="step-inner">Availability</div></li>
		<li class=""><div class="step-inner">Review</div></li>
	</ul>
	
	<div id="line">
		<div id="line-progress"></div>
	</div>
	</div>
   )
}