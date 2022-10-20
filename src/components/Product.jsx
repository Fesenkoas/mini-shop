import React, { useState } from "react";
import s from "./Product.module.css";

export const Product = ({ product }) => {
  const [details, setDetails] = useState(false);
  const btnBoll = details? s.sHide:s.sShow ;
  return (
    <div className={s.sProduct}>
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p className={s.font}>{product.price}</p>

      <button className={btnBoll} onClick={() => setDetails(prev => !prev)}>
        {details?'Hide Details':'Show Details'}
      </button>
      {details&&<div>
        <p>{product.description}</p>
        <p>Rate: <span className={s.font}>{product?.rating?.rate}</span></p>
      </div>}
    </div>
  );
};
