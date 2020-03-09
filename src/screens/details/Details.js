import * as React from "react";
import Header from "./../../common/header/Header";
import { Divider, IconButton, Snackbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import "./Details.css";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
      showSnackbar: false
    };
  }
  addToCart = () => {
    this.setState({ showSnackbar: true });
  };
  handleClose = () => {
    this.setState({ showSnackbar: false });
  };
  componentDidMount() {
    const url = window.location.pathname;
    const restaurantId = url.substring(url.lastIndexOf("/") + 1);
    fetch(`http://localhost:8080/api/restaurant/${restaurantId}`, {
      "Access-Control-Allow-Origin": "no-cors"
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ restaurantData: data });
      });
  }
  render() {
    const { restaurantData, showSnackbar } = this.state;
    return (
      <>
        <Header detailsPageHeader />
        {restaurantData ? (
          <>
            <div className="restaurant-wrapper">
              <div className="restaurant-card">
                <img
                  src={restaurantData.photo_URL}
                  alt="restaurant"
                  className="restaurant-img"
                />
                <div className="card-content">
                  <h3>{restaurantData.restaurant_name}</h3>
                  {restaurantData.address ? (
                    <p>{restaurantData.address.locality}</p>
                  ) : null}
                  {restaurantData.categories &&
                  restaurantData.categories.length > 0 ? (
                    <p className="categories">
                      {restaurantData.categories.map(category => (
                        <span key={category.id} className="comma">
                          {category.category_name}
                        </span>
                      ))}
                    </p>
                  ) : null}
                  <div className="footer">
                    <div className="ratings">
                      <p>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <span>
                          &nbsp;{restaurantData.customer_rating}&nbsp;
                        </span>
                      </p>
                      <p className="avg-text">
                        AVERAGE RATING BY&nbsp;
                        <b>{restaurantData.number_customers_rated}</b>
                        &nbsp;CUSTOMERS
                      </p>
                    </div>
                    <div className="cost-wrapper">
                      <p>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        <span>&nbsp;{restaurantData.average_price}</span>
                      </p>
                      <p className="avg-text">AVERAGE COST FOR TWO PEOPLE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {restaurantData.categories &&
            restaurantData.categories.length > 0 ? (
              <div className="items-wrapper">
                {restaurantData.categories.map(category => (
                  <div className="category-wrapper" key={category.id}>
                    <p>{category.category_name.toUpperCase()}</p>
                    <Divider />
                    {category.item_list && category.item_list.length > 0 ? (
                      <>
                        {category.item_list.map(item => (
                          <div className="item-row" key={item.id}>
                            <div className="food-item">
                              <p className="food">
                                <i
                                  className={"fa fa-circle " + item.item_type}
                                  aria-hidden="true"
                                ></i>
                                &nbsp;{item.item_name}
                              </p>
                            </div>
                            <div className="food-price">
                              <p className="price">
                                <i
                                  className={"fa fa-inr"}
                                  aria-hidden="true"
                                ></i>
                                &nbsp;{item.price.toFixed(2)}
                              </p>
                              <IconButton onClick={this.addToCart}>
                                <Add />
                              </IconButton>
                              <Snackbar
                                open={showSnackbar}
                                autoHideDuration={6000}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "left"
                                }}
                                message="Item added to cart!"
                                action={
                                  <React.Fragment>
                                    <IconButton
                                      aria-label="close"
                                      color="inherit"
                                      onClick={this.handleClose}
                                    >
                                      <CloseIcon fontSize="small" />
                                    </IconButton>
                                  </React.Fragment>
                                }
                              ></Snackbar>
                            </div>
                          </div>
                        ))}
                      </>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </>
        ) : null}
      </>
    );
  }
}
