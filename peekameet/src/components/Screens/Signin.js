import React, { useState } from "react";
import "./Signin.css";
import signin from "../../assets/images/signin.png";
import { Header } from "../Layout/Header";

export const Signin = () => {

const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');

  const loginHandler = (event)=>{
    event.preventDefault();
    console.log(userEmail);
    console.log(userPassword);
  }

  const emailHandler = (e)=>{
    setUserEmail(e.target.value);
    
  }
  const passwordHandler = (e)=>{
    setUserPassword(e.target.value);
  }

  return (
    <>
      <div className="firstContainer">
      <Header/>
        <div className="centerContainer">
          <div className="card mb-3 mt-3 first">
            <div className="row no-gutters">
              <div className="col-md-6 signinImage">
                <img src={signin} className="signinImage" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">
                    <span className="text-style-1">PEEKaMEET </span>lets you
                    network more effectively to achieve your business and career
                    goals
                  </h5>
                  <div className="card-text pb-3 radiusSection">
                    <span className="freelancer">Freelancer</span>
                    <span className="job">Job Seeker</span>
                    <span className="entrepreneur">Entrepreneur</span>
                    <span className="mompreneur">Mompreneur</span>
                    <br />
                    <br />
                    <span className="intern">Internship Seeker</span>
                    <span clas sName="environment">
                      Environmental Change Maker
                    </span>
                  </div>
                  <p className="card-text buildText">
                    Build and manage your network with PEEKaMEET
                  </p>
                </div>

                <form onSubmit={loginHandler}>
                  <div class="form-group">
                    <label for="email" className="Email">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email"  onChange={emailHandler} />
                  </div>
                  <div class="form-group">
                    <label for="pwd" className="password">
                      Password:
                    </label>
                    <input type="password" className="form-control" id="pwd"  onChange={passwordHandler}/>
                  </div>
                  <button type="submit" className="btn btn-default submit">
                    Sign In
                  </button>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" /> Remember me
                    </label>
                    <span className="forgot">Forgot Password</span>
                  </div>
                  <div class="signup">
                    <p>
                      Don’t have an account?{" "}
                      <span className="signupLine">Sign Up</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
