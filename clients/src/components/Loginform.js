import React, { useState,useContext } from 'react'

import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Loginform = () => {
  
const {state,dispatch} = useContext(UserContext);
  
  const navigate=useNavigate();

  const [email,setEmail]=useState('');
  
  const [password,setPassword]=useState('');
  const loginUser =async(e)=>{
    e.preventDefault();
      const res =await fetch('/signin',{
        method:"POST",
        
        credentials: 'include',
        headers:{
          "Content-Type" : "application/json"
        },body:JSON.stringify({
        email,password
        })
      });
     const data = res.json();
     if(res.status===400 ||!data ){
     

      window.alert("invalid");
    console.log('error');
     }
     else{
      dispatch({type:"USER",payload:true})
      window.alert('login successful');
      navigate('/');
     }
  


  }
  return (
      <>
        <form  method ="POST" className="register-form"  id ='register-form'>
         
         <div className='form-group'>
            <label htmlFor='email'>
              <i class="zmdi zmdi-email"></i>
            </label>
            <input type="email" name="email" id ="email " autoComplete='off'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}  placeholder='Your Email'/>
         </div>
       
       
         <div className='form-group'>
            <label htmlFor='password'>
              <i class="zmdi zmdi-lock"></i>
            </label>
            <input type="password" name="password" id ="password " autoComplete='off'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}  placeholder='Your Password'/>
         </div>
       
         <div className='form-group form-button'>
           <input type='submit' name='signin' id='signin' value="Login" onClick={loginUser} className='form-submit'/>
         </div>
       </form>
      </>
  )
}

export default Loginform