import { useParams } from 'react-router'
import { Index } from "../Index"
import { useState } from "react"
import { useEffect } from "react"
import {Item} from "../Item/Item"

export const Categories = () => {

  let {categoryId} = useParams()
  const [categories, setCategories]= useState ([]);

  useEffect(() => {
    let filter = Index.filter((product) => product.category === categoryId)
    setCategories(filter)
  }, [categoryId]);
  
return (

  <div className='cardConteiner'>
  {categories.map((product) => 
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
