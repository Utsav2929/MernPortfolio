import React,{useEffect,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

// import { NavLink,useNavigate } from 'react-router-dom';
import profileimg from '../images/signup.png';

import profile from '../images/123456.png';
const Aboutcont = () => {
     const [userData,setUserData] = useState({});
  const navigate =useNavigate();
 const callAboutPage = async()=>{
  

    try{
      const res = await fetch('/about',
      {
        
          method:"GET",
          
          headers:{
            Accept:"application/json",
            "Content-Type" : "application/json"
          
      },
      
      credentials: "include"

    });
        const data = await res.json();
        setUserData(data);
        console.log(data);

        if(!res.status===200){
            
          const error = new Error(res.error);
          throw error;
        }
        
    }catch(err){
      console.log('err2');
      navigate('/login');

    }
 

}
useEffect(()=>{
callAboutPage();
},[]);
  
  return (
    <>
    <div className='container emp-profile'>
        <form method='post'>
          <div className='row'>
            <div className='col-md-4 profimg'>
              <img src={userData.name==="Utsav Mandhani"?profileimg:profile} alt='profileimg'/>

            </div>
            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>Rating:<span>1/10</span></p>

                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile">Timeline</a>
                  </li>
                 
                </ul>
             
              </div>
            </div>
            <div className='col-md-2'>
              <button type="submit" className='profile-edit' name='btnaddmore'  value="Edit Profile"/>
            </div>
          </div>
          
            <div className='row'>
              <div className='col-md-4'>
                <div className='profile-link'>
                <p>Work Link</p>
                <NavLink to=''>Youtube</NavLink><br/>
                
                <NavLink to=''>Instagram</NavLink><br/>
                
                <NavLink to=''>Facebook</NavLink><br/>
                
                <NavLink to=''>Website</NavLink><br/>
                

                </div>
     
            
              </div>
              <div className='col-md-8 pl-5 about-info'>
              <div className="tab-content">
                <div className="tab-pane container active" id="home">
                <div className='row'>
                              <div className='col-md-6'>
                                <label >User Id</label>
                              </div>
                              <div className='col-md-6'>
                                
                                <p>{userData._id}</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >User Name</label>
                              </div>
                              <div className='col-md-6'>
                                <p>{userData.name}</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >User Email</label>
                              </div>
                              <div className='col-md-6'>
                                <p>{userData.email}</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >User Phone</label>
                              </div>
                              <div className='col-md-6'>
                                <p>{userData.phone}</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >Profession</label>
                              </div>
                              <div className='col-md-6'>
                                <p>{userData.work}</p>
                              </div>
                          </div>
                </div>
                <div className="tab-pane container fade" id="profile">
                <div className='row'>
                              <div className='col-md-6'>
                                <label >Experince</label>
                              </div>
                              <div className='col-md-6'>
                                
                                <p>Expert</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >Hourly Rate</label>
                              </div>
                              <div className='col-md-6'>
                                <p>10$/hr </p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >Total Projects</label>
                              </div>
                              <div className='col-md-6'>
                                <p>10</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >English Level</label>
                              </div>
                              <div className='col-md-6'>
                                <p>Expert</p>
                              </div>
                          </div>
                          <div className='row'>
                              <div className='col-md-6'>
                                <label >Availability</label>
                              </div>
                              <div className='col-md-6'>
                                <p>2 months</p>
                              </div>
                          </div>
                </div>
               
              </div>
                    
                </div> 
            </div>

        </form>
      </div>
    </>
  )
}

export default Aboutcont