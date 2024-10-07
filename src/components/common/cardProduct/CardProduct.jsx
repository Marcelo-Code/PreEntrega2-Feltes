/* eslint-disable react/prop-types */
import "./cardProduct.css";
import { CounterContainer } from "../counter/CounterContainer";

export const CardProduct = ({ item, onAdd }) => {
  const { title, imgUrl, description, price, stock } = item;
  return (
    <div className="productCard">
      <div>
        <h3>{title}</h3>
      </div>
      <img src={imgUrl} alt="" />
      <div>$ {price}</div>
      <br />
      <div>{description}</div>
      <br />
      <div>Stock disponible {stock}</div>
      <CounterContainer onAdd={onAdd} stock={stock} />
    </div>
  );
};
