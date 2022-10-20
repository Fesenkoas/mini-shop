import React from 'react'
import { Product } from "../components/Product";
import s from '../App.module.css';
import { useProducts } from "../hooks/hProduct";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const ProductsPages = () => {
    const {products, loading, error, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext)
    
    const createHandle =  (product) =>{
      close();
    addProduct(product)
    
    }
      return (
        <div className={s.sContent}>
          {loading && <Loading/>}
          {error && <Error error={error} /> }
          {products.map(product =><Product product={product} key={product.id}/>)}
          {modal && <Modal title="Create new product" onClose={close}>
            <CreateProduct onCreate={createHandle}/>
          </Modal>}
          <button className={s.sButton} onClick={open}>+</button>
        </div>
      );
}

export default ProductsPages