import * as React from "react";
import Header from "./../../common/header/Header";
import "./Details.css";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }
  handleChange(e) {
    this.props.onFilter(e.target.value);
  }
  toggleDropdown = () => {
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });
    }
  };
  goToProfile = () => {
    window.location = "/profile";
  };
  logout = () => {
    sessionStorage.removeItem("accessToken");
    window.location = "/";
  };
  render() {
    return (
      <>
        <Header detailsPageHeader />
        <div className="restaurant-wrapper">
          {/* {restaurants && restaurants.length > 0
            ? restaurants.map(restaurant => ( */}
          <div className="restaurant-card">
            <img
              src="https://b.zmtcdn.com/data/res_imagery/18432402_RESTAURANT_f755bf0b6a6ee7aca44d7ddffd464b7e.jpg"
              alt="restaurant-image"
              className="restaurant-img"
            />
            <div className="card-content">
              <h3>Lion Heart</h3>
              <p className="categories">North Indian, Chinese</p>
              <div className="footer">
                <div className="ratings">
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <span>&nbsp;4.5&nbsp;</span>
                  </p>
                  <p>AVERAGE RATING BY 562 CUSTOMERS</p>
                </div>
                <div className="cost-wrapper">
                  <p>
                    <i className="fa fa-inr" aria-hidden="true"></i>
                    <span>&nbsp;1200</span>
                  </p>
                  <p>AVERAGE COST FOR TWO PEOPLE</p>
                </div>
              </div>
            </div>
          </div>
          {/* ))
            : null} */}
        </div>
      </>
    );
  }
}
