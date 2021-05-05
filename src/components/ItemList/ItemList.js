import "./ItemList.css"
import { Index } from "../Index"
import { useState } from 'react';
import { useEffect } from 'react';
import {Item} from "../Item/Item"

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (products) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(products)
      }, 1000)
    })
  }

  useEffect(() => {
    getProducts(Index).then(result => {
      setProducts(result);
    });
  }, []);

  return (
    <div className='cardConteiner'>
      {products.map((product) => 
      <div>
                              <Item  productId={product.id}
                        name={product.name}
                        picture={product.image}
                        price={`$ ${product.price}`}
                        /> 
            </div>
  )
}
    </div >
  )
}






















// import React, { useEffect, useState } from "react";
// import "./ItemList.css"
// import{Item} from "../Item/Item"

// export const ItemList = (props) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const loadProducts = async () => {
//             const res = await fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=jordan")
//            const products = await res.json();
//             setProducts(products.items)

//         }
//         loadProducts()

//     }, []
//     )

//     return (
//         <div className="cardConteiner">
//             {
//                 products.length > 0 ? (
//                     products.map((products) =>
//                         <Item 
//                         title={products.title}
//                         picture={products.picture}
//                         price={products.price.amount}
//                         /> 
//                     )   
//                 ) : (<p>Ups! estamos cargando los productos</p>

//                 )}
//         </div>
//     );
//     }