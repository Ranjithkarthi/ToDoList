import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/signup", {
      username,
      email,
      password,
    }).then((response) => {
        if(response.data.status){
            navigate('/login')
        }
      }).catch((err) => {
        console.error('Error:', err.response ? err.response.data : err.message);
      });
  };

  return (
    <div className="signup-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        /> <br/>

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        /> <br/>

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          onChange={(e) => setPassword(e.target.value)}
        /><br/>

        <button type="submit">Sign Up</button>
        <p>have an Account? <span><Link to="/login">Login</Link></span></p>
      </form>
    </div>
  );
};

export default Signup;
