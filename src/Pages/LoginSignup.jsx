import React from 'react'
import style from "./LoginSignup.module.css"

const LoginSignup = () => {
  return (


    <>
    <div id={style.regLog}>
      <div id={style.login}>
        <img
          className={style.logo}
          alt="Logo"
        />

        <h2>Login to your Account</h2>
        <form >
          <label className={style.label}>Email</label>
          <br />
          <input
            className={style.input}
            type="email"
            placeholder="Your Email Address"
            name="email"
            required
          />
          <br />
          <label className={style.label}>Password</label>
          <br />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <br />
          {/* <Link className={style.forgotPassword} to="/ForgotPassword"> */}
            Forgot password{" "}
          {/* </Link> */}
          <button className={style.createAccount} type="submit">
            Login
          </button>
        </form>
        <p>
          Don't have an account?
          {/* <Link to="/Register"> Register now</Link> */}
        </p>
      </div>
    </div></>
  
  )
}

export default LoginSignup