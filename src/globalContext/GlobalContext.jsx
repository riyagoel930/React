import axios from 'axios';
import React, { createContext, useState } from 'react'
export const globalVar = createContext();

const GlobalContext = ({children}) => {
    const [products, setProducts] = useState([]);
    const[refreshId,setRefreshId]=useState()

    let fetchProducts = async (url) => {
        let { data } = await axios.get(url);
        setProducts(data)
    }
    
    let handleProductDelete=async(products,id)=>{
      let respose=await axios.delete(`http://localhost:4500/$(product)/${id}`)
      console.log(respose);
      setRefreshId(refreshId+1)
    }

console.log(products)
    return (
        <globalVar.Provider value={{products,fetchProducts}}>
         {children}
        </globalVar.Provider>
    )
}

export default GlobalContext
