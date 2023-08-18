import { useParams } from "react-router-dom";
import { useState } from "react";
const Productinfo = () => {
  const [info, setinfo] = useState();
  let { product } = useParams();
  console.log(product);
  //check  this 👇 and whole component
  (async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${product}`);
    let data = await res.json();
    setinfo(data);
  })();
  console.log(info);
  return <div>{info?.description}</div>;
};

export default Productinfo;
