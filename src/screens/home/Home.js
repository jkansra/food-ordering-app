import React, { useState, useEffect } from "react";
import Header from "./../../common/header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent } from "@material-ui/core";

import "./Home.css";

const useStyles = makeStyles({
  media: {
    height: 140
  }
});
const goToDetails = id => {
  console.log(id);
  // window.location = `/details/${id}`;
};

const Home = () => {
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/restaurant`)
      .then(res => res.json())
      .then(response => {
        setRestaurants(response.restaurants);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="card-wrapper">
        {restaurants && restaurants.length > 0
          ? restaurants.map(restaurant => (
              <Card
                className="restaurant-card"
                key={restaurant.id}
                onClick={() => goToDetails(restaurant.id)}
              >
                <CardMedia
                  className={classes.media}
                  image={restaurant.photo_URL}
                  title="restaurant-image"
                />
                <CardContent className="card-content">
                  <h3>{restaurant.restaurant_name}</h3>
                  <p className="categories">{restaurant.categories}</p>
                  <div className="footer">
                    <div className="ratings-wrapper">
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span>&nbsp;{restaurant.customer_rating}&nbsp;</span>
                        <span>({restaurant.number_customers_rated})</span>
                      </p>
                    </div>
                    <div className="cost-wrapper">
                      <p>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        <span>&nbsp;{restaurant.average_price} for two</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};

export default Home;
