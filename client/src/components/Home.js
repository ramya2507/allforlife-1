import { NavLink } from 'react-router-dom';
import './Home.css';

export default function Home(props){
  return (
    <div className="home-outer-container">
      <div className="home-container">
        <div className="home-customer-container">
          <div className="home-customer-image">
            <img className="customer-login-pic" src="./image/customer_login.png" alt="customer-login"></img>
          </div>
          <div className="home-inner-container">
            <div className="home-text-container">
              <h3>I'm USER</h3>
              <p>and I need help for me or a loved one</p>
            </div>
            <div class="decision-making">
              <NavLink className="decision-link" to="/customerlogin">LOGIN</NavLink >
              <NavLink className="decision-link" to="/customerregister">REGISTER</NavLink >
            </div>
          </div>
        </div>
        <div className="home-customer-container">
          <div className="home-inner-container">
            <div className="home-text-container">
              <h3>I'm PROVIDER</h3>
              <p>looking for an opportunity</p>
            </div>
            <div class="decision-making">
              <NavLink className="decision-link" to='/providerlogin' >LOGIN</NavLink>
              <NavLink className="decision-link" to='/providerregister'>REGISTER</NavLink >
            </div>
          </div>
          <div className="home-customer-image">
            <img className="customer-login-pic" src="./image/provider_login.jpg" alt="customer-login"></img>
          </div>
        </div>
      </div>
    </div>
  )
}