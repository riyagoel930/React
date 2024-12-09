import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout"
import Grocerries from "../components/Grocerries"
import Household from "../components/Household"
import Medical from "../components/Medical"
import Electronics from "../components/Electronics";
import Cart from "../components/Cart"
import LandingPage from "../pages/LandingPage"
import HomePage from "../pages/HomePage"
import Login from "../pages/LoginPage"
import Signup from "../pages/SignupPage"
import axios from "axios";



export const globalRoute=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/homePage",
            element:<HomePage/>,
            children:[
                {
                    path:"/homePage",
                    element:<Electronics/>
                },
                {
                    path:"/homePage/Medical",
                    element:<Medical/>,
                    loader:async(_)=>{
                        let {data} =await axios.get("http://localhost:4500/Medical")
                        return data;
                    }
                },
                {
                    path:"/homePage/Household",
                    element:<Household/>,

                },
                {
                    path:"/homePage/Grocessies",
                    element:<Grocerries/>,
                },
                {
                    path:"/homePage/Cart",
                    element:<Cart/>,
                },


            ]
        },
        {
            path:"/updateCard/:id",
            element:<updateCard/>,
        },
        {
            path:"/signup",
            element:<Signup/>
        },
        {
            path:"/login",
            element:<Login/>
        }
      ]

    }
])

