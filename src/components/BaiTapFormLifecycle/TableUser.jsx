import React, { Component } from "react";
import { connect } from "react-redux";
class TableUser extends Component {
  render() {
    return (
      <>
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <th>Mã SV</th>
              <th>Số điện thoại</th>
              <th>Họ tên</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.arrUser.map(({ id, name, phone, email }, index) => {
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{phone}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  arrUser: state.arrUser,
});

export default connect(mapStateToProps)(TableUser);
