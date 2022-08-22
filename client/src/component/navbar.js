import React from "react";
import "../App.css";
import  { useState, useEffect } from "react";

const Navbar=()=>{
    const [product, setproduct] = useState([]);
   
    
   const handleSearch=async (e)=>{
    const key=e.target.value;
    const result=await fetch(`https://fakestoreapi.com/products?sort=desc/${key}`)
    result=await result.json()
    if(result){
      setproduct(result)
    }

    }
    return(
        <div className="navbar">
               <nav>
            <div>
            <h1 className="ecommerce">Ecommerce App</h1>
            </div>
         
                <span className="search-bar">
                    
                    <input type="text"onChange={handleSearch} className="box-search" placeholder="Search Product"/>
                <button   className="search-btn">Search</button>
                </span>
                
                
                    <span>
                    <button className="return">Return & Orders</button>
                    </span>
               
                <span>
                    <button className="signin">Hello,Sign In</button>
                </span>
                <span>
                    <button className="cart">Cart</button>
                </span>
            </nav>
        </div>
        
    )
}

export default Navbar;