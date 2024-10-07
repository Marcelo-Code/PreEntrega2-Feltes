import "./footer.css";
import logoCoder from "../../../assets/imgs/logoCoder.png";
import logoReact from "../../../assets/imgs/logoReact.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img className="imgFooter" src={logoCoder} width="150px" alt="" />
      </div>
      <h2>Segunda pre entrega</h2>
      <div>
        <img className="imgFooter" src={logoReact} width="70px" alt="" />
      </div>
      <div className="name">Marcelo Feltes</div>
      <h2>2024</h2>
    </div>
  );
};
