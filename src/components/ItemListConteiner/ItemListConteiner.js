import "./ItemListConteiner.css"
import{ItemList} from "../ItemList/ItemList"
import { useState } from 'react';
import { useEffect } from 'react';
import {ItemCount} from "../ItemCount/ItemCount"


export const ItemListConteiner = () => {
  const [products, setProducts] = useState([]);

  const getProducts = (products) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(products)
      }, 1000)
    })
}

  useEffect(() => {
    getProducts(ItemList).then(result => {
      setProducts(result);
    });
  }, []);
  return(
    <div className='cardConteiner'>
      {products.map((product) => 
          <div className="card">
            <p className="cardTitle">{product.name}</p>
          <img className="cardPicture" src={product.image} alt=''></img>
            <p className= "cardPrice">{`$ ${product.price}`}</p>
            <ItemCount productId={product.id}/>
            </div>  
      )}
    </div>
  )
}

