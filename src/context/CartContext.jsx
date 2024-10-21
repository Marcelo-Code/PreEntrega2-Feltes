/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Función para agregar productos al carrito
  //-----------------------------------------

  const addToCart = (product) => {
    let exist = cart.some((element) => product.id === element.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  //Función para eliminar todos los productos del carrito
  //-----------------------------------------------------

  const deleteAllProducts = () => {
    setCart([]);
  };

  //Función para eliminar un producto particular del carrito
  //--------------------------------------------------------

  const deleteProductById = (id) => {
    let filteredArray = cart.filter((product) => product.id !== id);
    setCart(filteredArray);
  };

  //Función para obtener el valor total a pagar
  //-------------------------------------------

  const getTotalAmmount = () => {
    const totalAmmount = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalAmmount;
  };

  //Función para obtener la cantidad total de productos
  //---------------------------------------------------

  const getTotalQuantity = () => {
    const totalQuantity = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalQuantity;
  };

  //Función para obtener las unidades totales de un determinado producto
  //--------------------------------------------------------------------

  const getTotalQuantityById = (id) => {
    const product = cart.find((product) => product.id === id);
    return product ? product.quantity : 1;
  };

  const data = {
    cart,
    setCart,
    addToCart,
    deleteAllProducts,
    deleteProductById,
    getTotalAmmount,
    getTotalQuantity,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
