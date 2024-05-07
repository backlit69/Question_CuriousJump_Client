// import logo from './logo.svg';
import './App.css';
import Login from './Components/login.js';
import Question from './Components/Question.js';
import "react-toastify/dist/ReactToastify.css";
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        {/*<Route path="/game/" element={<Homepage/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/otp" element={<Otp/>}></Route> */}
      </Routes>
    </>

  );
}

export default App;