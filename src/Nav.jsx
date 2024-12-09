import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
          <Link to="/homePage"><li >Electrics</li></Link>  
            <Link to="/homePage/Medical"><li>Medicial</li></Link>
            <Link to="/homePage/Household"><li>Household</li></Link>
            <Link to="/homePage/Grocessies"><li>Groceries</li></Link> 
            <Link to="/homePage/Cart"><li>Cart</li></Link>
        </ul>

        <div className="btn">
        <ul>
            <Link to ="/signup"><li><button>Signup</button></li></Link>
            <Link to = "/Login"> <li><button>Login</button></li></Link>
        </ul>
        </div>
        
      </div>
        
  )
}

export default Nav
