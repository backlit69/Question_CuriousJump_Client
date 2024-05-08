import React, { useEffect, useState } from 'react';
import Logout from './logout';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const animals = ['Cat','Dinosaur','Frog','Hippo','Hyena','Leopard','Monkey','Starfish','Turtle','Zebra'];
const fruits = ['Apple','Banana','Black-berry','Cherry','Coconut','Green-apple','Lemon','Orange','Peach','Pear','Starfruit','Strawberry','Watermelon','']


function Question() {
  const [level, setLevel] = useState('');
  const [type, setType] = useState('');
  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const navigate=useNavigate();
  axios.defaults.withCredentials = true;
  var delete_cookie = function(name) {
    console.log("delete cookie called");
    document.cookie = name + '=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
  const handleLogout = async() => {
    console.log("logout pressed")
  //  e.preventDefault();
    console.log(Cookies)
    delete_cookie("auth");
    axios.post(`${process.env.REACT_APP_API}/logout`)
    .then(res =>{
      console.log(res)
    })
    toast.success("Logged out successfully");
    navigate("/");   
  };



  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/`)
    .then(result => {
      console.log(result.data)
      if(result.data.success)
      {

      }
      else{
        console.log("on question , navigating to login "+ result.data.success)
        navigate('/')
      }
    })
    .catch(err=>console.log(err));
  },[])
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'level':
        setLevel(value);
        break;
      case 'type':
        setType(value);
        break;
      case 'question':
        setQuestion(value);
        break;
      case 'option1':
        setOption1(value);
        break;
      case 'option2':
        setOption2(value);
        break;
      case 'option3':
        setOption3(value);
        break;
      case 'option4':
        setOption4(value);
        break;
      case 'correctAnswer':
        setCorrectAnswer(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your submit logic here
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/question`,
            { 
                level,
      type,
      question,
      option1,
      option2,
      option3,
      option4,
      correctAnswer
            } 
          );
  
        if (res && res.data.success) {
              toast.success("Added the Question");
              eraseAll();
        } else {
              toast.error("Could not add the Question")
        }
      } catch (error) {
          toast.warning("Something went wrong");
          console.log(error);
          
      }
    console.log({
      level,
      type,
      question,
      option1,
      option2,
      option3,
      option4,
      correctAnswer
    });


  };

  const eraseAll = ()=>{
    const value = "";
    setLevel(value);
    setType(value);
    setQuestion(value);
    setOption1(value);
    setOption2(value);
    setOption3(value);
    setOption4(value);
    setCorrectAnswer(value);
  }

  return (
    <>
    <button onClick={handleLogout} className='btn btn-secondary'>Logout</button>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="level">LEVEL</label>
              <select
                name="level"
                className="form-select"
                aria-label="Select Level"
                value={level}
                onChange={handleChange}
                required
              >
                <option value="">SELECT LEVEL</option>
                <option value="Easy">EASY</option>
                <option value="Medium">MEDIUM</option>
                <option value="Hard">HARD</option>
              </select>
              <br />
              <label htmlFor="type">TYPE</label>
              <select
                name="type"
                className="form-select"
                aria-label="Select Type"
                value={type}
                onChange={handleChange}
                required
              >
                <option value="">SELECT TYPE</option>
                <option value="Fruit">FRUITS</option>
                <option value="Capital">CAPITAL</option>
                <option value="Animal">ANIMAL</option>
                <option value="Vegetable">VEGETABLE</option>
                <option value="Maths">MATHS</option>
              </select>
              <br />
              <label htmlFor="question">Question:</label>
              <input
                name="question"
                className="form-control form-control-lg"
                type="text"
                placeholder="Wanna fill in a question ?"
                aria-label="Question"
                value={question}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="option1">Option 1:</label>
              <input
                name="option1"
                className="form-control form-control-lg"
                type="text"
                placeholder="Option 1"
                aria-label="Option 1"
                value={option1}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="option2">Option 2:</label>
              <input
                name="option2"
                className="form-control form-control-lg"
                type="text"
                placeholder="Option 2"
                aria-label="Option 2"
                value={option2}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="option3">Option 3:</label>
              <input
                name="option3"
                className="form-control form-control-lg"
                type="text"
                placeholder="Option 3"
                aria-label="Option 3"
                value={option3}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="option4">Option 4:</label>
              <input
                name="option4"
                className="form-control form-control-lg"
                type="text"
                placeholder="Option 4"
                aria-label="Option 4"
                value={option4}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="correctAnswer">Correct Answer</label>
              <select
                name="correctAnswer"
                className="form-select"
                aria-label="Select Correct Answer"
                value={correctAnswer}
                onChange={handleChange}
                required
              >
                <option value="">SELECT Option</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
              <br />
              <button type="submit" className="btn btn-primary" onClick={()=>handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>



<div style={{display:"flex"}}>
<div style={{width: '25%'}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Animal</th>
    </tr>
  </thead>
  <tbody>
    {animals.map((animal,index)=>{
      return <tr>
      <td>{animal}</td>
      </tr>
    })}  
  </tbody>
</table>
</div><div style={{width: '25%'}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Fruits</th>
    </tr>
  </thead>
  <tbody>
    {fruits.map((animal,index)=>{
      return <tr>
      <td>{animal}</td>
      </tr>
    })}  
  </tbody>
</table>
</div>
<div style={{width: '25%'}}>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Vegetables</th>
    </tr>
  </thead>
  <tbody>
    {animals.map((animal,index)=>{
      return <tr>
      <td>{animal}</td>
      </tr>
    })}  
  </tbody>
</table>
</div>

</div>


    </>
  );
}

export default Question;
