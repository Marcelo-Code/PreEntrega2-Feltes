/* eslint-disable react/prop-types */
import "./ItemListContainer.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="muiCard">
      {items.map((item) => {
        return (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <CardMedia
                component="img"
                height="194"
                image={item.imgUrl}
                alt={item.title}
              />
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                $ {item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/productDetail/${item.id}`}>
                <Button size="small">Ver más detalles</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemList;
