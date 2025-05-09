import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


const Signup=()=>{
    // initialize the state here 
    const [name,setName ]=useState('')
    const [email,setEmail]=useState('')
   
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    // we have three states for hosting data 
    // loading , success and error
    const [loading,setLoading]= useState('')
    const [success,setSuccess]= useState('')
    const [error,setError]= useState('')
    const navigate = useNavigate(); // Initialize navigate function
    // function to post data  
    // We are going to have the following data
    // username,password,email,phone 
    const submit =async(e)=>{
        // we want to prevent our browser from refreshing when user clicks the sign up button
        e.preventDefault()
        setLoading("Please wait while we post data")
        // we want to have a try and catch 
        try {
            // this works if we don't have errors 
            // we want to post data 
            // we want our data in the format of keyvalue pair 
            // we will use form data 
            const data = new FormData()
            data.append("name",name)
            
            data.append("email",email)
            data.append("phone",phone)
            data.append("address",address)
            
            // we will use axios package which comes with http request methods
            // we have the following http request methods 
            // POST, GET, DELETE ,PUT
            const response=await axios.post("https://teekay.pythonanywhere.com/api/signup",data)
            setSuccess("login successful")
            setLoading("")
            setError("")
            // navigate("/"); // Redirect to home page after success

        } catch (error) {
            // this works if you have an error
            setLoading("")
            setError("Something went wrong!")
        }

    }

    
    return(

       
<div className="row justify-content-center mt-4">
<div className="card shadow signup col-md-6 p-4 ">
           <div> <h1 className="text-center bsignup">Create an account</h1>
           <h1 className="text-center text-info well">Welcome To Juju</h1>
           </div>
           
             <form onSubmit={submit}>
               
                

               <h5 className="text-warning text-sm">  </h5>
              {/* bind success in h2 */}
              <h5 className="text-success">{success}</h5>
              {/* bind error in h2  */}
              {/* <h2 classNameName="text-danger">{error}</h2> */}

                <input type="username" className="form-control"  placeholder="Enter your username" required onChange={(e)=>setName(e.target.value)}/>
                {/* {username} */}
                <br/>
                  <input type="email" className="form-control"  placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}/>
                  {/* {email} */}
                  
                  <br/>
             
                  <input type="tel" className="form-control" placeholder="Enter your phone number" required onChange={(e)=>setPhone(e.target.value)}/>
                  {/* {phone} */}
            
              <br/>
              <input type="tel" className="form-control" placeholder="Enter your Address " required onChange={(e)=>setAddress(e.target.value)}/>
                  {/* {address} */}
           
            <br/><br/>
            <a href="" >
            <button className="btn btn-primary w-100 btns" type="submit" disabled={loading}>
                    {loading && <span className="spinner-border spinner-border-sm"></span>}
                    {loading || "Sign Up"}
                </button>
                
                </a><br/><br/>
            <p className="text-light">Already have an account? <Link to='/Signin'  className="text-light" >Sign In</Link></p> 
            <p> <Link to='/'  className="text-light"> Not Now?</Link></p>
             </form>
               
         
        </div>
     </div>


    
                        
    )
}
export default Signup
