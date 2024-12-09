import axios from 'axios'
import React,{useState} from 'react'
import { useLocation,useNavigate, useParams } from 'react-router-dom'

const UpdateCard = () => {
  let data=useLocation();
  let {id} = useParams();
   console.log(id + "",id); 
  let useNavigate=useNavigate()
  console.log(data)

  let [updateCard,setUpdateCard]=useState({
    id:data.state.product.id,
    category:data.state.product.category,
    price:data.state.product.price,
    title:data.state.product.title 
  });
  const handleChange=(e)=>{
    let {name,value}=e.target;
    setUpdateCard({...UpdateCard,[name]:value})
    }

    let handleSubmit=async(e)=>{
      e.preventDefault();
      let response =await axios.put('http://localhost:4500/${data.state.product_Type}/${data.state.product.id}'
        ,updateCard);
        console.log(response);
        Navigate("/homePage")
    }
  
  return (
    <div >
      <form action="" onSubmit={handleSubmit}>
        
        <div className={style["UpdateData"]}>
        <h1>Update Data</h1>

          <div>
          <label htmlFor="">title</label>
          <input type="text"name='title' onChange={handleChange} value={updateCard.title}/>
          </div>

          <div>
          <label htmlFor="">Price</label>
          <input type="text"name='price'onChange={handleChange} value={updateCard.price}/>
          </div>
  
        <div>
          <label htmlFor="">Category</label>
          <input type="text"name='category'onChange={handleChange} value={updateCard.category}/>
        </div>

        <button>Update Data</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateCard
