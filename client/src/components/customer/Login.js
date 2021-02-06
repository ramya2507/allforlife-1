import React, { useState } from "react";
import axios from "axios";
import "./Login.css"

export default function Login(props) {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const [loggedIn, setLoggedIn] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const fetchUser = () => {
        if(formValues.name === "" || formValues.password==="") {
            setError("Email or password cannot be blank !")
        } else {
           axios.post(`http://localhost:8007/api/login`,
             { email : formValues.email, password :formValues.password}).then(res =>{
                if(res.data.length <= 0){
                    setError("Email or password is incorrect !")
                    } else {
                        setError("");
                        props.setUser(res.data)
                        setLoggedIn(true);
                    } 
             });      
        }
    }

    return (
        <div className="login-container">
            <div className="login">  
                <form className="login-form" onSubmit={event => event.preventDefault()} >
                    <h2>CUSTOMER LOGIN</h2>
                    {error && <div className="alert-error">
                    {error}
                    </div>}
                    <h3>Email:</h3>
                    <input type="text" name="email" value ={formValues.email} onChange = {handleChange}  placeholder="Email"/>
                    <h3>Password:</h3>
                    <input type="password" name="password" value= {formValues.password} onChange = {handleChange}  placeholder="Password"/>
                    <br/>
                    <input type="submit" value="LOGIN" onClick={fetchUser} className="login-button"/>
                </form>
            </div>
        </div>
    )
    
}
