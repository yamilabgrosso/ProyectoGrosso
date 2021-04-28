import React, { useEffect, useState } from "react";
import "./ItemList.css"
import{Item} from "./Item"

export const ItemList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch("https://challenge-meli-backend.herokuapp.com/api/items?q=jordan")
            const products = await res.json();
            setProducts(products.items)

        }
        loadProducts()

    }, []
    )

    return (
        <div className="cardConteiner">
            {
                products.length > 0 ? (
                    products.map((products) =>
                        <Item 
                        title={products.title}
                        picture={products.picture}
                        price={products.price.amount}
                        /> 
                    )   
                ) : (<p>Ups! estamos cargando los productos</p>

                )}
        </div>
    );
    }