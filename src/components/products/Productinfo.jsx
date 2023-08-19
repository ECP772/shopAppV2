import { useParams } from "react-router-dom";
import { useState } from "react";
import { Dna } from "react-loader-spinner";
import "./styles.css";
const Productinfo = () => {
  const [info, setinfo] = useState();
  let { product } = useParams();
  console.log(product);
  let data;
  (async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${product}`);
    let data = await res.json();
    setinfo(data);
  })();
  if (info)
    data = (
      <div className="productinfo">
        <img src={info?.image} alt="" />
        <div>
          <h2>{info?.title}</h2>
          <p>{info?.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    );
  else
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
  return <div>{data}</div>;
};

export default Productinfo;
