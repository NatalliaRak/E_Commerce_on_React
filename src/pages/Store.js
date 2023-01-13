import React, {useEffect, useState} from "react";
import Product from "../components/Product";
import axios from 'axios';
import MainP from "../components/MainPic";


export default function Store() {
  const [products, setProducts] = useState();

  const url = 'https://fakestoreapi.com/products?sort=desc';
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data: products} = await axios.get(url);
            setProducts(products);
          } catch (error) {
            console.error(error.message);
          }}
    
        fetchData();
      }, []);


  return (
    <main>
      <MainP />
      <div className="row">
        <h2 className="text-center p-4">Fake API helps you to find all you need</h2>
        <p className="text-center p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      {products?.map((product) => (
        <div className="col" key={product.id}>
          <Product key={product.id}  product={product} />
        </div>
      ))}
      </div>
    </main>
  );
}
