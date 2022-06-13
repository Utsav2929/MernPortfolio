import React from 'react'
import { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import signpic from '../images/signup.png';

const Signup = () => {
  
    const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  let name,value;
  const handleInputs = (e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value});
  }

const PostData =async(e)=>{
  e.preventDefault();
  
  const {name,email,phone,work,password,cpassword} = user;
 const res=await fetch('/register',{
   method:"POST",
   headers:{
     "Content-Type" : "application/json"
   },body:JSON.stringify({
    name,email,phone,work,password,cpassword
   })
 })
 const data = await res.json();
 if(res.status===422 || !data){
   window.alert('Invalid Registration');
   console.log("Invalid Registraion");
 }else{
   
  window.alert('successful Registration');
  console.log("successful Registraion");
  navigate('/login');
 }

}

  return (
    <section className='signup'>
      <div className='container mt-5  mainsignup'>
        <div className='row signup-content'>
          <div className='signup-form col-sm-6'>
            <h2 className='formtitle'> Signup</h2>
            <form  method='POST' className="register-form"  id ='register-form'>
              <div className='form-group'>
                 <label htmlFor='name'>
                   <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type="text" name="name" id ="name " autoComplete='off'
                 value={user.name}
                 onChange={handleInputs}
                 placeholder='Your Name'/>
              </div>
              <div className='form-group'>
                 <label htmlFor='email'>
                   <i class="zmdi zmdi-email"></i>
                 </label>
                 <input type="email" name="email" id ="email " autoComplete='off'
                 value={user.email}
                 onChange={handleInputs}
                 placeholder='Your Email'/>
              </div>
              <div className='form-group'>
                 <label htmlFor='phone'>
                   <i class="zmdi zmdi-phone-in-talk"></i>
                 </label>
                 <input type="number" name="phone" id ="phone " autoComplete='off'
                 value={user.phone}
                 onChange={handleInputs}
                 placeholder='Your Phone Number'/>
              </div>
              <div className='form-group'>
                 <label htmlFor='work'>
                   <i class="zmdi zmdi-slideshow material-icons-name"></i>
                 </label>
                 <input type="text" name="work" id ="work " autoComplete='off'
                 value={user.work}
                 onChange={handleInputs}
                 placeholder='Your Profession'/>
              </div>
              <div className='form-group'>
                 <label htmlFor='password'>
                   <i class="zmdi zmdi-lock"></i>
                 </label>
                 <input type="password" name="password" id ="password " autoComplete='off'
                 value={user.password}
                 onChange={handleInputs}
                 placeholder='Your Password'/>
              </div>
              <div className='form-group'>
                 <label htmlFor='cpassword'>
                   <i class="zmdi zmdi-lock"></i>
                 </label>
                 <input type="password" name="cpassword" id ="cpassword " autoComplete='off'
                 value={user.cpassword}
                 onChange={handleInputs}
                 placeholder='Confirm Password'/>
              </div>
              <div className='form-group form-button'>
                <input type='submit' name='signup' id='signup' value="Register" onClick={PostData} className='form-submit'/>
              </div>
            </form>
          </div>
          <div className='signup-img col-md-6'>
          <div><figure><img src={signpic} alt=" sign up"/>
          </figure>
            <NavLink to ="/login" className='signup-img-link'>I Already Have Account</NavLink>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Signup