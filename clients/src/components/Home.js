import React,{useState,useEffect} from 'react'

const Home = () => {

  const [userName,setUserData] = useState('');
  const [show,setshow]=useState(false);
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
        setUserData(data.name);
        console.log(data);
        setshow(true);

        if(!res.status===200){
            
          const error = new Error(res.error);
          throw error;
        }
        
    }catch(err){
      console.log('err2');
   

    }
 

}
useEffect(()=>{
callAboutPage();
},[]);

  
  console.log("helllo");
  return (
    <>  <div className='container-fluid home-page py-lg-5'>
          
        <p>Welcome</p>
        <h1>{userName}</h1>
        <h1>{ show ? 'happy to see u back':'We Are the MERN Developer' }</h1>
        </div>
    </>
  )
}

export default Home