/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import "./counter.css";

export const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div>
      <span className="numberContainer">
        <Button
          variant="contained"
          onClick={restar}
          disabled={contador === 1 ? true : false}
        >
          -
        </Button>
        <h1 className="number">{contador}</h1>
        <Button
          variant="contained"
          onClick={sumar}
          disabled={contador === stock ? true : false}
        >
          +
        </Button>
      </span>

      <Button
        variant="outlined"
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
