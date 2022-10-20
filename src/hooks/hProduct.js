import { useEffect, useState } from "react";
export function useProducts() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const addProduct = (product) =>{
setProducts(prev =>[...prev,product])
}

  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {fetchProducts();}, []);
  return { products, loading, error, addProduct };
}
