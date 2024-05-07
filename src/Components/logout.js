import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
// import './Logout.css'

const Logout = () => {
    const navigate=useNavigate();
    const handleLogout = () => {
        Cookies.remove('token');
        toast.success("Logged out successfully");
        navigate("/");   
      };

  return (
    <div>
       <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
    </div>
  )
}

export default Logout