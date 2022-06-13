import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import signpic from '../images/signup.png';
import Loginform from './Loginform';
import { usercontext } from '../App';
const Login = () => {

  return (
  <>
  <section className='signup'>
      <div className='container mt-5  mainsignup'>
        <div className='row signup-content'>
        <div className='signup-img col-md-6'>
          <div><figure><img src={signpic} alt=" sign up"/>
          </figure>
            <NavLink to ="/signup" className='signup-img-link'>Create New Account?</NavLink>
            </div>
            </div>
          <div className='signup-form col-sm-6'>
            <h2 className='formtitle'> Signup</h2>
          <Loginform/>
          </div>
         
        </div>
      </div>
    </section>
  </>

  )
}

export default Login