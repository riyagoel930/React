import React from 'react'
import { globalRoute } from './routing/globalRouter'
import { RouterProvider } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import GlobalContext from './globalContext/GlobalContext';

function App(){
  return (
    <GlobalContext>
    <Toaster/>
    <RouterProvider 
     router={globalRoute}/>
    </GlobalContext>  
  )
}

export default App
