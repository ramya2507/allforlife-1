import React from 'react';
import './JobPost.css'

import UserType from "./UserType"

export default function JobPost() {
  return (
    <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h3 className="page-section-heading text-center text-uppercase text-secondary mb-0">Who needs help?</h3>
                <div className="divider-custom"></div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <UserType type="Myself" img="user"message="I am looking for professional help for myself"/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                      <UserType type="Loved One" img="user2"message="I am looking for professional help for a loved one"/>
                    </div>
                    
                </div>
                
                <button type="button" class="btn btn-primary">Start</button>
                
                
            </div>
        </section>
  )
}

