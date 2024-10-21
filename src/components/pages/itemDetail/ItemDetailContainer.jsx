import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../../productsMock";

import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams();
  let totalQuantity = getTotalQuantityById(id);

  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let newProduct = { ...item, quantity };
    console.log(newProduct);
    addToCart(newProduct);
  };

  return <ItemDetail item={item} onAdd={onAdd} totalQuantity={totalQuantity} />;
};

export default ItemDetailContainer;
