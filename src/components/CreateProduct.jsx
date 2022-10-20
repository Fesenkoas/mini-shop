import React, { useState } from "react";
import s from "./CreateProduct.module.css";
import Error from "./Error";
// const productData = {
//   title: "",
//   price: 13.5,
//   description: "lorem ipsum set",
//   image: "https://i.pravatar.cc",
//   category: "electronic",
//   rating: {
//     rate: 10,
//     count: 11,
//   },
// };
const CreateProduct = ({ onCreate }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  // async function fetchCreate() {
  //   const res = await fetch("https://fakestoreapi.com/products", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "value",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     }),
  //   });
  //   const data = await res.json();
  //   onCreate(data);
  // }
  async function fetchCreate() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    onCreate(data);
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    setError("");
    if (value.trim().length === 0) {
      setError("Plese enter valid text");
      return;
    }
    // productData.title = event.target.value;
    fetchCreate();
  };

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className={s.sCreateProduct}
        placeholder="Enter Product title...."
        value={value}
        onChange={changeHandler}
      />
      {error && <Error error={error} />}
      <button type="submit" className={s.sCreate}>
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
