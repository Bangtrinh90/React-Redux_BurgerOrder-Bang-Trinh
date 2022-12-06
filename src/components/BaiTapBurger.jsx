import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapBurger.css";
import Menu from "../components/Menu";

class BaiTapBurger extends Component {
  // function
  renderBurgerMid = () => {
    let { burger } = this.props;
    // console.log(Object.entries(burger));
    return Object.entries(burger).map(([name, value]) => {
      let newBurger = [];
      for (let i = 0; i < value; i++) {
        newBurger.push(<div key={i} className={name}></div>);
      }
      return newBurger;
    });
  };

  render() {
    this.renderBurgerMid();
    return (
      <div className="container">
        <h2 className="text-secondary text-center my-1">Bài Tập Burger</h2>
        <div className="row">
          <div className="col-7 my-3">
            <h3 className="text-dark text-center">Burger Của Bạn</h3>
            <div className="my-4">
              <div className="breadTop"></div>
              {this.renderBurgerMid()}
              <div className="breadBottom"></div>
            </div>
          </div>

          <Menu />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
  };
};

export default connect(mapStateToProps, null)(BaiTapBurger);
