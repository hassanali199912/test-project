import "./styles/login.css";
import {useState,} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from "../store/userSlicer";
import { useNavigate } from "react-router-dom";

export default function Login() {
 

const [username, setUserName] = useState("");
const [password, setPassword] = useState("");
 const navegate = useNavigate()

const {loading,error} = useSelector((state)=>state.user);
const dispatch = useDispatch();
const handleFormData = (e)=>{
  e.preventDefault()
const userCredentials ={
   username,
   password
}
 dispatch(loginUser(userCredentials)).then((result)=>{
  console.log();
    if (result.payload.message === "logged successfully") {
    setUserName('');
    setPassword('')
    navegate("/")
  }else{
    console.log(error);
  }
 })
  
}

  return (
    <>
      <section className="login-from-section">
        <div className="container">
          <div className="row">
            <div className="col">
            <h1 className="text-center">Login Now</h1>
              <form className=" shadow-lg custom-from" onSubmit={handleFormData}> 
                <div className="col ">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                  User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="user Name"
                    value ={username}
                    onChange={(e)=>{setUserName(e.target.value)}}
                  />
                </div>
                <div className="col ">
                  <label htmlFor="exampleFormControlInput2" className="form-label">
                    password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="password"
                    value ={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                  />
                </div>
                <div className="col">
                  <button className="btn btn-primary btn-md" type="submit">
                    {loading? "loading....":"login"}
                  </button>
                </div>
                {
                  error &&(
                    <div className="col">
                  <div className="alert alert-danger " role="alert">
                  {error}
                  </div>
                </div>
                  )
                }
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
