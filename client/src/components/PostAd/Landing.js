import React from 'react';
import './Landing.css'

import UserType from "./UserType"
import Button from "./Button"

export default function JobPost(props) {
  return (
    <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">Who needs help?</h3>
                <div className="divider-custom"></div>
                <div className="row justify-content-center">
                  
                  <UserType type="Myself" img="user"message="I am looking for professional help for myself"/>
                  <UserType type="Loved One" img="user2"message="I am looking for professional help for a loved one"/>
                </div>
                <button type="button" class="btn btn-primary">Start</button>
                
                
            </div>
        </section>
  )
}

