import React, { useEffect, useState } from 'react';
import Logout from './logout'
import { useNavigate} from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" >Curious Jump Admin</a>
    
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <button type="button" class="btn btn-light" onClick={()=>navigate('/question')}>Question</button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-light" onClick={()=>navigate('/jsonquestion')}>Json Question</button>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
       <Logout></Logout>
      </form>
    </div>
  </nav></div>
  )
}

export default Navbar