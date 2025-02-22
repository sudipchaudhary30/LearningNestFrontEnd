import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarSec from '../components/NavbarSec'
import Footer from '../components/Footer'
import Skills from './Skills'
import Mentors from './Mentors'
import Communities from './Communities'


const Dashboard = () => {
  return (
    <div>

       <NavbarSec/>
       <Skills/>
       <Mentors/>
       <Communities/>
       <Footer/>
        
    </div>
  )
}

export default Dashboard