import React, { PureComponent } from "react";
import { connect } from "react-redux";

class FormUser extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },

      errors: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },

      valid: false,
      disabledUpdate: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.editUser.id &&
      prevProps.editUser.id !== this.props.editUser.id
    ) {
      this.setState({
        values: this.props.editUser,
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.addUser();
    this.setState({
      values: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
    });
  };

  addUser = () => {
    let arrUser = [...this.props.arrUser];
    arrUser.push({ ...this.state.values });
    const action = {
      type: "ADD_USER",
      payload: arrUser,
    };
    this.props.dispatch(action);

    localStorage.setItem("arrUser", JSON.stringify(arrUser));
  };

  updateUser = () => {
    let newValues = { ...this.state.values };
    console.log({ newValues });
    const action = {
      type: "UPDATE_USER",
      payload: newValues,
    };
    this.props.dispatch(action);
    this.setState({
      values: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
    });
  };

  checkValidSubmit = () => {
    let values = { ...this.state.values };
    let errors = { ...this.state.errors };
    for (let key in values) {
      if (errors[key] !== "" || values[key] === "") {
        return false;
      }
    }
    return true;
  };

  checkValidUpdate = (id, value) => {
    let newValue = { ...this.state.values };
    if (newValue[id] !== value) {
      this.setState({
        disabledUpdate: true,
      });
    } else {
      this.setState({
        disabledUpdate: false,
      });
    }
  };

  handleInput = (e) => {
    const { id, value } = e.target;
    let newValues = { ...this.state.values };
    let newErrors = { ...this.state.errors };

    newValues[id] = value;

    let message = "";
    let dataType = e.target.getAttribute("data-type");
    let maxLength = e.target.getAttribute("data-max-length");
    let dataTaken = e.target.getAttribute("data-taken");

    if (value.trim() === "") {
      message = id + " cannot be blank !";
    } else {
      if (dataType === "letter") {
        let regexLetter =
          /^[a-zA-Z_???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" + "???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????" + "????????????????????????????????????????????????????????\\s]+$/;
        if (!regexLetter.test(value)) {
          message = id + " is invalid !";
        }
      }

      if (dataType === "number") {
        let regexNumber = /^[0-9]+$/;
        if (!regexNumber.test(value)) {
          message = id + " is invalid !";
        }
      }

      if (dataType === "email") {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regexEmail.test(value)) {
          message = id + " is invalid !";
        }
      }

      if (maxLength !== null && value.length > maxLength) {
        message = id + ` kh??ng v?????t qu?? ${maxLength} k?? t???`;
      }

      if (dataTaken === "taken") {
        let arrUser = [...this.props.arrUser];
        let index = arrUser.findIndex((user) => user.id === newValues["id"]);
        if (index !== -1) {
          message = "This id has been taken. Please try another.";
        }
      }
    }
    newErrors[id] = message;

    this.setState(
      {
        values: newValues,
        errors: newErrors,
      },
      () => {
        this.setState({
          valid: this.checkValidSubmit(),
        });
      }
    );
    this.checkValidUpdate(id, value);
  };

  render() {
    let { id, name, phone, email } = this.state.errors;
    let { values } = this.state;
    return (
      <>
        <form className="card" onSubmit={this.handleSubmit}>
          <h3 className="card-header bg-dark text-light">
            Th??ng tin sinh vi??n
          </h3>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p className="mb-0 mt-3">M?? SV</p>
                  <input
                    className="w-100"
                    id="id"
                    type="text"
                    onInput={this.handleInput}
                    data-type="number"
                    data-taken="taken"
                    data-max-length="6"
                    value={values.id}
                    disabled={!!this.props.editUser.id}
                  />
                  {id && <div className="alert alert-danger">{id}</div>}
                </div>
                <div className="form-group">
                  <p className="mb-0 mt-3">S??? ??i???n tho???i</p>
                  <input
                    className="w-100"
                    id="phone"
                    type="text"
                    onInput={this.handleInput}
                    data-type="number"
                    value={values.phone}
                  />
                  {phone && <div className="alert alert-danger">{phone}</div>}
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p className="mb-0 mt-3">H??? t??n</p>
                  <input
                    className="w-100"
                    id="name"
                    type="text"
                    onInput={this.handleInput}
                    data-type="letter"
                    value={values.name}
                  />
                  {name && <div className="alert alert-danger">{name}</div>}
                </div>
                <div className="form-group">
                  <p className="mb-0 mt-3">Email</p>
                  <input
                    className="w-100"
                    id="email"
                    type="text"
                    onInput={this.handleInput}
                    data-type="email"
                    value={values.email}
                  />
                  {email && <div className="alert alert-danger">{email}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-success mx-2"
              disabled={!this.state.valid || !!this.props.editUser.id}
            >
              Th??m sinh vi??n
            </button>
          </div>
        </form>
        <button
          className="btn btn-warning mx-2"
          style={
            this.props.editUser.id
              ? { display: "inline-block" }
              : { display: "none" }
          }
          disabled={!this.state.disabledUpdate}
          onClick={() => {
            this.updateUser();
          }}
        >
          C???p nh???t
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  arrUser: state.userReducer.arrUser,
  editUser: state.userReducer.editUser,
});

export default connect(mapStateToProps)(FormUser);
