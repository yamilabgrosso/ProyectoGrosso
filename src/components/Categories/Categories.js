import { useParams } from 'react-router'
import { Fragment, useState } from "react"
import { useEffect } from "react"
import { Item } from "../Item/Item"
import 'firebase/firestore';
import { getFirestore } from "../Firebase/Index"
import React from 'react';
import LottieAnimation from '../Animaciones/Animaciones';
import noCategory from '../Animaciones/8912-empty-category.json';
import "./Categories.css"
import {Search} from "../Search/Search"
import "./Categories.css"

export const Categories = () => {

  let { categoryId } = useParams()
  const [categories, setCategories] = useState([]);
  const [emptyCategory, setEmptyCategory] = useState(false)


  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection('Items')
    const cat = itemCollection.where("categoryId", "==", categoryId)
    cat
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setEmptyCategory(true)
        }
        const data = (querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })))
        setCategories(data)
      })
  }, [categoryId]
  )

  return (

    <Fragment>
      <Search
       Items = {categories}     
      />
      { emptyCategory && <LottieAnimation lotti={noCategory} height={400} width={300} />}

      {!emptyCategory &&
        <div className="cardContainer">
          {
            categories.map((product) => (
              <div key={product.id}>
                <Item
                  productId={product.id}
                  name={product.name}
                  picture={product.image}
                  price={`$ ${product.price}`}
                />
              </div>
            ))
          }
        </div>
      }
    </Fragment >
  )
}
