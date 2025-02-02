import React, { useState } from "react"
import {Link} from "react-router-dom"

import Head from "./Head"
import "./header.css"

function Header(){

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle'>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
