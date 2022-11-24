import React, { Component } from "react";

export default class TableUser extends Component {
  render() {
    return (
      <table className="table">
        <thead className="bg-dark text-light">
          <tr>
            <th>Mã SV</th>
            <th>Số điện thoại</th>
            <th>Họ tên</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}
