import React, { PureComponent } from "react";
import { connect } from "react-redux";
class TableUser extends PureComponent {
  deleteUser = (idClick) => {
    let arrUser = [...this.props.arrUser];
    let index = arrUser.findIndex((user) => user.id === idClick);
    if (index !== -1) {
      arrUser.splice(index, 1);
    }
    const action = {
      type: "DELETE_USER",
      payload: arrUser,
    };
    this.props.dispatch(action);
    // localStorage.setItem("arrUser", JSON.stringify(arrUser));
  };

  editUser = (idClick) => {
    let arrUser = [...this.props.arrUser];
    let changeObj = arrUser.find((user) => user.id === idClick);
    const action = {
      type: "EDIT_USER",
      payload: changeObj,
    };
    this.props.dispatch(action);
  };

  render() {
    const arrUser = this.props.arrUser;
    return (
      <>
        <table className="table">
          <thead className="bg-dark text-light">
            <tr>
              <th>Mã SV</th>
              <th>Số điện thoại</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arrUser.map(({ id, name, phone, email }, index) => {
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{phone}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        this.deleteUser(id);
                      }}
                    >
                      <i className="fa-solid fa-trash-can me-2" />
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => {
                        return this.editUser(id);
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square me-2" />
                      Edit
                    </button>
                  </td>
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
  arrUser: state.userReducer.arrUser,
});

export default connect(mapStateToProps)(TableUser);
