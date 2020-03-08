import React from "react";
import Header from "./../../common/header/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent } from "@material-ui/core";

import "./Home.css";

const useStyles = makeStyles({
  media: {
    height: 140
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className="card-wrapper">
        <Card className="restaurant-card">
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Restaurant Name</h3>
            <p>Continental, Lebanese, North Indian, Italian</p>
            <div className="footer">
              <div className="ratings-wrapper">
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>&nbsp;4.2&nbsp;</span>
                  <span>(2002)</span>
                </p>
                <p>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                  <span>&nbsp;1800 for two</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="restaurant-card">
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Restaurant Name</h3>
            <p>Continental, Lebanese, North Indian, Italian</p>
            <div className="footer">
              <div className="ratings-wrapper">
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>&nbsp;4.2&nbsp;</span>
                  <span>(2002)</span>
                </p>
                <p>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                  <span>&nbsp;1800 for two</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="restaurant-card">
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Restaurant Name</h3>
            <p>Continental, Lebanese, North Indian, Italian</p>
            <div className="footer">
              <div className="ratings-wrapper">
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>&nbsp;4.2&nbsp;</span>
                  <span>(2002)</span>
                </p>
                <p>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                  <span>&nbsp;1800 for two</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="restaurant-card">
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Restaurant Name</h3>
            <p>Continental, Lebanese, North Indian, Italian</p>
            <div className="footer">
              <div className="ratings-wrapper">
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>&nbsp;4.2&nbsp;</span>
                  <span>(2002)</span>
                </p>
                <p>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                  <span>&nbsp;1800 for two</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="restaurant-card">
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Restaurant Name</h3>
            <p>Continental, Lebanese, North Indian, Italian</p>
            <div className="footer">
              <div className="ratings-wrapper">
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>&nbsp;4.2&nbsp;</span>
                  <span>(2002)</span>
                </p>
                <p>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                  <span>&nbsp;1800 for two</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="restaurant-card">
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Restaurant Name</h3>
            <p>Continental, Lebanese, North Indian, Italian</p>
            <div className="footer">
              <div className="ratings-wrapper">
                <p>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <span>&nbsp;4.2&nbsp;</span>
                  <span>(2002)</span>
                </p>
                <p>
                  <i class="fa fa-inr" aria-hidden="true"></i>
                  <span>&nbsp;1800 for two</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Home;
