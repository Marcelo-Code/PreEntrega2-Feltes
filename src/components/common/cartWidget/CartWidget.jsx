import { BsCart } from "react-icons/bs";
import Badge from "@mui/material/Badge";

export const CartWidget = () => {
  return (
    <div style={{ fontSize: "30px" }}>
      <Badge badgeContent={4} color="primary">
        <BsCart />
      </Badge>
    </div>
  );
};
