import React, { useState,useEffect } from "react";
//import './Login-SignUp.css'
import { useNavigate } from "react-router-dom";
// import { useAuth} from "../context/auth";
import axios from "axios";
import { toast } from "react-toastify";


function Login(){

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    // const [auth,setAuth]=useAuth('');
    const [formValues,setFormValues]=useState({
        email:'',
        password:'',
    });
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate=useNavigate();
    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
      e.preventDefault();
        setIsSubmit(true);
        // setFormErrors(validate(formValues));
    
        try {
          const res = await axios.post(
            `${process.env.REACT_APP_API}/login`,
            {email,password} 
          );
          console.log(res.data);
          if (res && res.data.success){
                toast.success("Logged in successfully");
                  navigate("/question");
                  localStorage.setItem('auth',res.data.auth);
          } else {
                toast.error("not logged in")
          }
        } catch (erorr) {
            toast.warning("Something went wrong");
            
        }
      };

     const handleChange=(e)=>{
        if(e.target.name=='email') setEmail(e.target.value);
        if(e.target.name=='password') setPassword(e.target.value);
        setFormValues({...formValues,[e.target.name]:e.target.value});
    };


    useEffect(() => {
      const auth = localStorage.getItem("auth");
      console.log(auth)
      if(auth !== null)
      axios.post(`${process.env.REACT_APP_API}/auth`,{auth})
      .then(result => {
        console.log(result.data)
        if(result.data.success){
          console.log("on login , navigating to question")
          navigate('/question')
        }
          

      })
      .catch(err=>console.log(err));
    },[])
      
    return (
       <div>
        {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <div class="title"></div>

        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
          <div class="border p-4">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                class="form-control" 
                name="email" 
                placeholder="Email" 
                type="email"
                value={formValues.email}
                onChange={handleChange} 
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
              <input
                class="form-control" 
                type="password"
                name="password" 
                placeholder="Password" 
                value={formValues.password}
                onChange={handleChange}
                required
            /> 
            </div>
            <button type="submit" class="btn btn-primary" onClick={()=>handleSubmit}>Let`s go!</button>
            </div>
          </form>

        </div>
      </div>
    </div>
    </div>
    )
}

export default Login;