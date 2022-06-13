import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { UserContext } from '../App'; 
// import logo  from '../images/123456.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  
const {state,dispatch} = useContext(UserContext);
  const RenderMenu =()=>{
    if(state){
      return (
        <>
         <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/aboutcont">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
        </>
        
      )
    }
    else{
      return(
        <>
         <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/aboutcont">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
     
    
    
        </>
      )
    }
  };
  return (<>
  <nav className="navbar-expand-lg navbar-light bg-light navbar ">
  <NavLink className="navbar-brand" to="#">UTSAV
  {/* <img src={logo} alt =" logo" className='imglogo'/> */}
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

  
    <RenderMenu/>
    </ul>
  
  </div>
</nav></>
  )
}

export default Navbar