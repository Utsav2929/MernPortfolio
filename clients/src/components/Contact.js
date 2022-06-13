import React ,{useEffect,useState} from 'react'

import { NavLink,useNavigate } from 'react-router-dom';
const Contact = () => {
  const [userData,setUserData] = useState({name:"",email:"",phone:"",meassage:""});
  const navigate =useNavigate();
 const callAboutPage = async()=>{
  

    try{
      const res = await fetch('/getdata',
      {
        
          method:"GET",
          
          headers:{
            // Accept:"application/json",
            "Content-Type" : "application/json"
          
      }
      
      // credentials: "include"

    });
        const data = await res.json();
        setUserData({...data,name: data.name,email:data.email,phone:data.phone});
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

const handleInputs =(e)=>{
  const name= e.target.name;
  const value=e.target.value;
  setUserData({...userData,[name]:value});

}
  const contactform = async (e)=>{
    e.preventDefault();
    
    window.alert('message');

    const { name , email , phone , message }=userData;

    console.log(message);
    const res =await fetch('/contactt',{
      method:"POST",
      
    
      headers:{
        "Content-Type" : "application/json"
      },body:JSON.stringify({
      name,email,phone,message
      }),
    });
     const data =  await res.json();
     if(!data){
      window.alert('message not sent ');
     }
     else {
      window.alert('message sent');
      setUserData({...userData, message:""});
     }

  }

  return (
    <>
    <div className=' container contact-info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                <div className='contact_info_item d-flex justify-content-start align-items-center'>
                  <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                  <div className='contact_info_content'>
                    <div className='contact_info_title'>
                      Phone
                    </div>
                    <div className='contact_info_text'>
                      +916264320685
                    </div>
                  </div>

                </div>
                <div className='contact_info_item d-flex justify-content-start align-items-center'>
                  <img src="https://img.icons8.com/office/24/0000000/iphone.png" alt="phone"/>
                  <div className='contact_info_content'>
                    <div className='contact_info_title'>
                      Email
                    </div>
                    <div className='contact_info_text'>
                      utsav2929@gmail.com
                    </div>
                  </div>

                </div>
                <div className='contact_info_item d-flex justify-content-start align-items-center'>
                  <img src="https://img.icons8.com/office/24/0000000/iphone.png" alt="phone"/>
                  <div className='contact_info_content'>
                    <div className='contact_info_title'>
                      Address
                    </div>
                    <div className='contact_info_text'>
                      Dewas MP,India
                    </div>
                  </div>

                </div>
              </div> 
          </div>
        </div>
    </div>


      <div className='contact-form container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className=' contact_form_title'>
                  Get in Touch
                </div>
                <form  method="POST" id="contact_form">
                    <div className='contact_form_name d-flex justify-content-between align-items-between'>
                      <input type="text" id='contact_form_name' className='contact_form_name input_feild'name ="name" value ={userData.name}
                      onChange={handleInputs}
                      placeholder='Your Name' required="true"/>
                      
                      <input type="email" id='contact_form_email' className='contact_form_email input_feild'name ="email" value ={userData.email}
                      onChange={handleInputs}
                      placeholder='Your Email' required="true"/>
                      
                      <input type="number" id='contact_form_phone' className='contact_form_phone input_feild'name ="phone" value ={userData.phone}
                      onChange={handleInputs}
                      placeholder='Your Phone' required="true"/>
                    </div>

                    <div className='contact_form_text py-4 '>
                      <textarea className='text_feild contact_form_message'   name ="message" value={userData.message} 
                      onChange={handleInputs}
                      placeholder='Your Message' cols="70" rows="5"/>
                    </div>
                    <div className='contact_form_button'>
                      <button type='submit' className='button contact_submit_button btn btn-primary' onClick={contactform}>Send Message</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact