import React, { PureComponent } from "react";
import { connect } from "react-redux";

class FormUser extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleInput = (e) => {
    const { id, value } = e.target;
    let newValues = this.props.values;
    newValues[id] = value;
    console.log(newValues);
  };

  render() {
    console.log(this.props.values);
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <h3 className="card-header bg-dark text-light">Thông tin sinh viên</h3>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p className="mb-0 mt-3">Mã SV</p>
                <input
                  className="w-100"
                  id="id"
                  type="text"
                  onInput={this.handleInput}
                  data-type="number"
                  data-max-length="6"
                />
                {/* {id && <div className="alert alert-danger">{id}</div>} */}
              </div>
              <div className="form-group">
                <p className="mb-0 mt-3">Số điện thoại</p>
                <input
                  className="w-100"
                  id="phone"
                  type="text"
                  onInput={this.handleInput}
                  data-type="number"
                />
                {/* {phone && <div className="alert alert-danger">{phone}</div>} */}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p className="mb-0 mt-3">Họ tên</p>
                <input
                  className="w-100"
                  id="name"
                  type="text"
                  onInput={this.handleInput}
                  data-type="letter"
                />
                {/* {name && <div className="alert alert-danger">{name}</div>} */}
              </div>
              <div className="form-group">
                <p className="mb-0 mt-3">Email</p>
                <input
                  className="w-100"
                  id="email"
                  type="text"
                  // onInput={}
                  data-type="email"
                />
                {/* {email && <div className="alert alert-danger">{email}</div>} */}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success" disabled={true}>
            Thêm sinh viên
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  values: state.values,
  errors: state.values,
  valid: state.valid,
});

export default connect(mapStateToProps)(FormUser);
