import { CartWidget } from "../../common/cartWidget/CartWidget";
import { useState } from "react";
import logoEmpresa from "../../../assets/imgs/logoEmpresa.png";
import { MaterialUISwitch } from "../../layout/Switch/Switch";
import "./navBar.css";
import { Link } from "react-router-dom";
import { categories } from "./categories";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cambiarModo = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "lightNavBar" : "darkNavbar"}>
      {/* para navegar de manera dinámica por nuestro sitio usamos el componente Link */}
      <Link className="logoEmpresa" to="/">
        <table>
          <tbody>
            <tr>
              <td>
                <img src={logoEmpresa} width="80px" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <span className="logoEmpresa">Deco Design</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
      <ul className="navBar_list">
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>
      <MaterialUISwitch onChange={cambiarModo} />
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  );
};
