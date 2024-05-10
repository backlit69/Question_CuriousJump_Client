import React, { useEffect, useState } from "react";
import Logout from "./logout";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { queries } from "@testing-library/react";
import Optionlist from "./optionlist";
import Navbar from "./navbar";


function JsonAdd() {
  const [level, setLevel] = useState("");
  const [type, setType] = useState("");
  const [questions, setQuestions] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth !== null)
      axios
        .post(`${process.env.REACT_APP_API}/auth`, {
          auth,
        })
        .then((result) => {
          console.log(result.data);
          if (!result.data.success) {
            console.log("on jsonquesiton going to login");
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    if (e.target.name == "questions") setQuestions(e.target.value);
    const { name, value } = e.target;
    switch (name) {
      case 'level':
        setLevel(value);
        break;
      case 'type':
        setType(value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your submit logic here
    try {
      const jsonObject = JSON.parse(questions);
      const questionArray = jsonObject.questions;
      console.log(questionArray.length);
      console.log(jsonObject)
      console.log(questionArray)
      const res = await axios.post(
        `${process.env.REACT_APP_API}/question`,
          {
            count : questionArray.length,
             questions:questionArray,
      level,
      type,
          }
        );

      if (res && res.data.success) {
            toast.success("Added the Questions");
            eraseAll();
      } else {
            toast.error("Could not add the Questions")
      }
    } catch (error) {
      toast.warning("Something went wrong");
      console.log(error);
    }
    console.log({
      questions,
    });
  };

  const eraseAll = () => {
    const value = "";
    setQuestions(value);
  };

  return (
    <>
      <Navbar></Navbar>
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
                required>
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
                required>
                <option value="">SELECT TYPE</option>
                <option value="Fruit">FRUITS</option>
                <option value="Capital">CAPITAL</option>
                <option value="Animal">ANIMAL</option>
                <option value="Vegetable">VEGETABLE</option>
                <option value="Maths">MATHS</option>
              </select>
              <br />
              <label htmlFor="question">JsonAdd:</label>
              <textarea
                name="questions"
                className="form-control form-control-lg mt-3" // Added mt-3 for margin-top
                placeholder="Wanna fill in a question ?"
                aria-label="JsonAdd"
                value={questions}
                onChange={handleChange}
                required
              />
              <br />

              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Optionlist></Optionlist>
    </>
  );
}

export default JsonAdd;
