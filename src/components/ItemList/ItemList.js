import P001 from "../imagenes/P001.jpg"
import P002 from "../imagenes/P002.jpg"
import P003 from "../imagenes/P003.jpg"
import P004 from "../imagenes/P004.jpg"
import P005 from "../imagenes/P005.jpg"
import P006 from "../imagenes/P006.jpg"
import P007 from "../imagenes/P007.jpg"
import P008 from "../imagenes/P008.jpg"
import P009 from "../imagenes/P009.jpg"
import P010 from "../imagenes/P010.jpg"
import P011 from "../imagenes/P011.jpg"
import P012 from "../imagenes/P012.jpg"




export const ItemList =  [
  {
    id: '001',
    category: 'Atlanta Hawks',
    image: P001,
    name: "Men's Atlanta Hawks Trae Young Nike White 2020/21 Swingman Jersey - Association Edition",
    price: 140
  },
  {
    id: '002',
    category: 'Atlanta Hawks',
    image: P002,
    name: "Men's Atlanta Hawks Trae Young Nike Red 2020/21 Swingman Jersey - Icon Edition",
    price: 140
  },
  {
    id: '003',
    category: 'Boston Celtics',
    image: P003,
    name: "Men's Boston Celtics Jayson Tatum Nike Kelly Green 2020/21 Swingman Jersey – Icon Edition",
    price: 140
  },
  {
    id: '004',
    category: 'Boston Celtics',
    image: P004,
    name: "Men's Boston Celtics Kemba Walker Nike White 2020/21 Swingman Player Jersey – City Edition",
    price: 140
  },
  {
    id: '005',
    category: 'Brooklyn Nets',
    image: P005,
    name: "Men's Brooklyn Nets James Harden Nike Black 2020/21 Swingman Jersey - Icon Edition",
    price: 140
  },
  {
    id: '006',
    category: 'Brooklyn Nets',
    image: P006,
    name: "Men's Brooklyn Nets Kirie Irving Nike White 2020/21 Swingman Jersey - Icon Edition",
    price: 140
  },
  {
    id: '007',
    category: 'Chicago Bulls',
    image: P007,
    name: "Men's Chicago Bulls Coby White Nike Red 2020/21 Swingman Jersey - Icon Edition",
    price: 140
  },
  {
    id: '008',
    category: 'Chicado Bulls',
    image: P008,
    name: "Men's Chicago Bulls Szach LavineNike White 2020/21 Swingman Custom Jersey – Association Edition",
    price: 140
  },
  {
    id: '009',
    category: 'Cleveland Cavaliers',
    image: P009,
    name: "Men's Cleveland Cavaliers Darius Garland Nike Black Swingman Jersey - Statement Edition",
    price: 140
  },
  {
    id: '010',
    category: 'Cleveland Cavaliers',
    image: P010,
    name: "Men's Cleveland Cavaliers Kevin Love Nike Maroon Swingman Jersey - Icon Edition",
    price: 140
  },
  {
    id: "011",
    category: "Dallas Mavericks",
    image: P011,
    name: "Men's Dallas Mavericks Dirk Nowitzki Nike White Replica Swingman Jersey - Association Edition",
    price: 140
  },
  {
    id: '012',
    category: "Dallas Mavericks",
    image: P012,
    name: "Men's Dallas Mavericks Luka Doncic Nike Royal 2020/21 Swingman Jersey – Icon Edition",
    price: 140
  }
]






















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