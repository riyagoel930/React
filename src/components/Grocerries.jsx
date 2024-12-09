import React,{ useEffect, useContext} from 'react'
import style from "../style/grocerries.module.css"
import { globalVar } from '../globalContext/GlobalContext';
import { useNavigate } from "react-router-dom";

const Grocerries = () => {
  let {products,fetchProducts, setProducts, refreshId } =useContext(globalVar);
  console.log(products);

  const navigate = useNavigate();
  let handleUpdate=(products)=>{
    navigate("/updateCard",{state:{products,products_Type:"Medical"}})
  };

  const handleProductDelete=(type,id)=>{
    console.log(`Delete ${type} with ID: ${id}`);
  };

  useEffect(()=>{
    fetchProducts("http://localhost:4500/Medical");
  },[refreshId])
  return (
    <div className={style["grocerries"]}>
      {products.map((ele,i)=>(
          <div key={ele.id} className={style["product"]}>
          <div className={style["image"]}>
            <img src={ele.image} alt="" />
          </div>
          <h1>{ele.title}</h1>
          <p>{ele.price}</p>
          <p>{ele.category}</p>
          <p>{ele.id}</p>
          <div className={style["button"]}>
            <button
              className={style["update"]}
              onClick={() => handleUpdate(ele)}
            >
              Update
            </button>
            <button
              className={style["delete"]}
              onClick={() => handleProductDelete("Medical", ele.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}         
        </div>
  )
}

export default Grocerries

