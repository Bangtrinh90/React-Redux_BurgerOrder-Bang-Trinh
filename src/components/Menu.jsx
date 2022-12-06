import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([name, price], index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>
            <button
              className="btn btn-success mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_BURGER",
                  payload: [name, 1],
                };
                this.props.dispatch(action);
              }}
            >
              +
            </button>
            {burger[name]}
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                const action = {
                  type: "CHANGE_BURGER",
                  payload: [name, -1],
                };
                this.props.dispatch(action);
              }}
            >
              -
            </button>
          </td>
          <td>{price * burger[name]} $</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="col-5 my-3">
        <div>
          <h3 className="text-dark text-center mb-5">Menu</h3>
          <table className="table pt-5">
            <thead className="text-dark text-center">
              <tr>
                <th>Thức ăn</th>
                <th>Số lượng</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody className="text-dark text-center">{this.renderMenu()}</tbody>
            <tfoot>
              <tr>
                <td colSpan={3} align="right">
                  Thành tiền : {this.props.total} $
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.BurgerReducer.burger,
  menu: state.BurgerReducer.menu,
  total: state.BurgerReducer.total,
});

export default connect(mapStateToProps)(Menu);
