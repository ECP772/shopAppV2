import { useState, useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "./styles.css";
const Products = () => {
  const [products, setproducts] = useState();
  let api = `https://fakestoreapi.com/products/`;
  console.log(products);
  let data;
  useEffect(() => {
    (async () => {
      let data = await fetch(api);
      let json = await data.json();
      setproducts(json);
    })();
  }, [api]);

  if (products) {
    data = products.map((product) => {
      return (
        <div key={product.div} className="card">
          <Link to={`${product.id}`}>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
            <p> {product.description.substring(0, 100) + "...."}</p>
          </Link>
          <button>read more</button>
          <button>Add to cart</button>
        </div>
      );
    });
  } else
    data = (
      <div className="loading">
        <Dna
          visible={true}
          height="500"
          width="500"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );

  return (
    <div className="outter-container">
      <h1>Our Products</h1>
      <div className="flex-container">{data}</div>
      <footer>copyright ©️ 2023</footer>
    </div>
  );
};

export default Products;
