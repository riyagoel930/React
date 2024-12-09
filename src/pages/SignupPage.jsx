import React,{useState} from 'react'
import style from "../style/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const SignupPage =()=>{
  let navigate=useNavigate()
  let [data,setData]=useState({
      userName:"",
      email:"",
      password:"",
      contact:"",
      address:""
  })


  let handelChnage=(e)=>{
    let {name,value}=e.target;
    setData({...data, [name]:value})

    }

  let handleSubmit=async (e)=>{
      e.preventDefault();
         let response=await axios.post("http://localhost:4500/customers", data);
         toast.success("User is Created Succesfully");
         setTimeout(()=>{
            navigate("/homePage")
         },1500)
  }

  return (
    <div className={style["signup"]}>
      <form action="" onSubmit={handleSubmit}>
        
        <div className={style["signupPage"]}>
        <h1>SignUp</h1>
          <div>
          <label htmlFor="">CustomerName</label>
          <input type="text"name='userName' required onChange={handelChnage}/>
          </div>

          <div>
          <label htmlFor="">Password</label>
          <input type="text"name='password' required onChange={handelChnage}/>
          </div>
  
        <div>
          <label htmlFor="">Contact</label>
          <input type="tel"name='contact'required onChange={handelChnage} />
        </div>

        <div>
          <label htmlFor="">Address</label>
          <input type="text"name='address'required onChange={handelChnage} />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text"name='email'required onChange={handelChnage} />
        </div>

        <button>SignUp</button>
        </div>
      </form>
    </div>

          
  )
}

export default SignupPage;
