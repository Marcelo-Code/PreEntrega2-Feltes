import "./itemListContainer.css";
import { products } from "../../../productsMock";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category == categoryName
    );
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(categoryName ? filteredProducts : products);
      } else {
        rej({ message: "algo salió mal" });
      }
    });
    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entró en el catch", error);
      });
  }, [categoryName]);
  return <ItemList items={items} />;
};
