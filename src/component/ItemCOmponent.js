import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";


const useStyles = makeStyles({
  root: {
    minWidth: 280,
    maxWidth: 280,
    height: 250,
    maxHeight: 250,
    margin: "10px 10px",
    padding: "0",
    borderLeft: "2px solid #ffce32",
    borderLeftWidth: "5px",
    cursor: "pointer",
    border: '0.5px solid lightgray'
  },
  img: {
    marginLeft: "70px",
    marginTop: "10px",
  },
  icon: {
    float: "right",
    margin: "10px",
    color: '#ff6ec7'
  },
});

export default function ImgMediaCard({ img, price, descr }) {
  const [Favorite, setFavorit] = useState(false);
  const classes = useStyles();

  const AddFav = () => {
    Favorite ? setFavorit(false) : setFavorit(true)
  }

  return (
    <Card className={classes.root}>
      {Favorite ? (
        <FavoriteIcon onClick={AddFav} className={classes.icon} />
      ) : (
          <FavoriteBorderIcon onClick={AddFav} className={classes.icon} />
        )}

      <img
        className={classes.img}
        component="img"
        alt="Contemplative Reptile"
        width="150"
        height="120"
        src={img}
        title="Contemplative Reptile"
      />
      <CardContent>
        <h2>{price}</h2>
        <p>{descr}</p>
      </CardContent>
    </Card>
  );
}
