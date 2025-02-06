import React from 'react';
import "./Register.css"

const Register = () => {
  return (
    <div>
      
      <form className="form">
        <p className="title">LearningNest Register</p>
        <p className="message">Register Now.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Firstname</span>
          </label>
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label>
        <button type="submit" className="submit">Submit</button>
        <p className="signin">Already have an account? <a href="#">Signin</a></p>
      </form>
    </div>
  );
};

export default Register;
