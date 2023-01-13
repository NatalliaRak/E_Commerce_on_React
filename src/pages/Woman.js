import React, {useEffect, useState} from "react";
import Product from "../components/Product";
import axios from 'axios';


export default function Woman() {
  const [products, setProducts] = useState();

  const url = "https://fakestoreapi.com/products/category/women's clothing";
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data: products} = await axios.get(url);
            setProducts(products);
          } catch (error) {
            console.error(error.message);
          }
          
        }
    
        fetchData();
      }, []);


  return (
    <main>
      <div className="row">
      {products?.map((product) => (
        <div className="col-sm" key={product.id}>
          <Product  product={product} />
        </div>
      ))}
      </div>
    </main>
  );
}
