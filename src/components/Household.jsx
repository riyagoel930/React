import React,{useContext,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { globalVar } from "../globalContext/GlobalContext";
import style from "../style/household.module.css"

const Home = () => {
  let { products, fetchProducts, setProducts, refreshId } = useContext(globalVar);
  console.log(products)


  const navigate = useNavigate();
  let handleUpdate=(products)=>{
    navigate("/updateCard",{state:{products,products_Type:"HouseHold"}})
  };

  const handleProductDelete=(type,id)=>{
    console.log(`Delete ${type} with ID: ${id}`);
  };
  useEffect(() => {
    fetchProducts("http://localhost:4500/HouseHold");
  }, [refreshId])
  return (
    <div className={style["houseHold"]}>
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
              onClick={() => handleProductDelete("HouseHold", ele.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}         
        </div>
  )
}

export default Home
