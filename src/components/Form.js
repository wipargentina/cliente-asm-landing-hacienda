import React, { Component } from "react";
import axios from "axios";

// var config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "application/json",
//   },
//   crossdomain: true,
// };

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      isSending: false,
      isSended: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSending: true,
    });

    axios
      .post("https://wipargentina.com/clientes/mondino/api", this.state)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            isSending: false,
            isSended: true,
          });
          window.location.assign(process.env.PUBLIC_URL + "/gracias");
        }
        if (response.status === 400) {
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const isSending = this.state.isSending;
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-body">
              <h5>Completa tus datos aquí</h5>
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  name="fname"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Apellido</label>
                <input
                  type="text"
                  name="lname"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "ENVIANDO ..." : "¡REGISTRAME!"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
