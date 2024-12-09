import React from 'react'
import { Link } from 'react-router-dom'
import style from "../style/landingPage.module.css";


const LandingPage = () => {
  return (
    <div className={style["landingPage"]}>
      <div className={style["header"]}>
        <h1>WELCOME TO SHOPEASE</h1>
        <h4> Your one shop for everything</h4>

       <Link to = "/homePage"> <button>Shop Now</button></Link>
      </div>
    </div>
  )
}

export default LandingPage


// import style from "file path"
{/* <div className={style["signup-Page"]}/> */}

// welcome to shopease
// your one shop for everything
// shop now---button

