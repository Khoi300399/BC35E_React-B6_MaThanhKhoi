import React, { Component } from "react";
import FormUser from "./FormUser.jsx";
import TableUser from "./TableUser.jsx";

export default class BaiTapFormRedux extends Component {
  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   this.addTableUser();
  // };

  // addTableUser = () => {
  //   let arrUser = this.state.arrUser;
  //   // Thêm Object:values vào Array:arrUser
  //   arrUser.push(...this.state.values);

  //   this.setState(
  //     {
  //       arrUser: arrUser,
  //     },
  //     () => {
  //       console.log(arrUser);
  //     }
  //   );
  // };

  // handleInput = (e) => {
  //   const { id, value } = e.target;
  //   let newValues = { ...this.state.values };
  //   newValues[id] = value;

  //   let newErrors = { ...this.state.errors };
  //   let mess = "";
  //   let dataType = e.target.getAttribute("data-type");
  //   let maxLength = e.target.getAttribute("data-max-length");
  //   if (value.trim() === "") {
  //     mess = id + " cannot be blank !";
  //   } else {
  //     if (dataType === "letter") {
  //       let regexLetter =
  //         /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
  //       if (!regexLetter.test(value)) {
  //         mess = id + " is invalid !";
  //       }
  //     }

  //     if (dataType === "number") {
  //       let regexNumber = /^[0-9]+$/;
  //       if (!regexNumber.test(value)) {
  //         mess = id + " is invalid !";
  //       }
  //     }

  //     if (dataType === "email") {
  //       let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //       if (!regexEmail.test(value)) {
  //         mess = id + " is invalid !";
  //       }
  //     }

  //     if (maxLength !== null && value.length > maxLength) {
  //       mess = id + ` không vượt quá ${maxLength} ký tự`;
  //     }
  //   }
  //   newErrors[id] = mess;

  //   this.setState(
  //     {
  //       values: newValues,
  //       errors: newErrors,
  //     },
  //     () => {
  //       console.log(this.state);
  //       this.setState(
  //         {
  //           valid: this.checkFormValid(),
  //         },
  //         () => {
  //           console.log("valid", this.checkFormValid());
  //         }
  //       );
  //     }
  //   );
  // };

  // checkFormValid = () => {
  //   let { values, errors } = this.state;
  //   for (let key in errors) {
  //     if (errors[key] !== "" || values[key] === "") {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  render() {
    return (
      <div className="container mt-5">
        <FormUser />
        <br></br>
        <TableUser />
      </div>
    );
  }
}
