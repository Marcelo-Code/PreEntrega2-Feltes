/* eslint-disable react/prop-types */
import { CardProduct } from "../../common/cardProduct/CardProduct";

export const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <CardProduct item={item} onAdd={onAdd} />
    </div>
  );
};
