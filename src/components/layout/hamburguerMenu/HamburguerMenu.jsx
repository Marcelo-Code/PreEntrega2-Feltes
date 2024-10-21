import { slide as Menu } from "react-burger-menu";
import { categories } from "../navbar/categories";
import { Link } from "react-router-dom";
import "./hamburguerMenu.css";

export const HamburguerMenu = () => {
  // const showSettings = (event) => {
  //   event.preventDefault();
  // };
  return (
    <Menu>
      <h2 className="bm-menu-title">CATEGORÍAS</h2>
      <div className="bm-menu-sub-title">Deco Design</div>
      <div className="bm-menu">
        <li className="bm-item-list">
          {categories.map(({ title, path }) => (
            <Link key={title} to={path}>
              <ul className="bm-item">{title}</ul>
            </Link>
          ))}
        </li>
      </div>
    </Menu>
  );
};
