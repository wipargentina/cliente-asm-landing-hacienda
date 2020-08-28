import React, { Component } from "react";

import Mailchimp from "react-mailchimp-form";

class Suscription extends Component {
  render() {
    return (
      <div className="suscription">
        <div className="container">
          <h3>Suscripción</h3>
          <h5 className="mb-4">
            Suscribite a nuestro newsletter para recibir novedades de los
            próximos remates
          </h5>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <Mailchimp
                action="https://alfredosmondino.us17.list-manage.com/subscribe/post?u=cc0fa9a90b6de679e1432e53a&amp;id=0d65fc1ee6"
                fields={[
                  {
                    name: "EMAIL",
                    placeholder: "Email",
                    type: "email",
                    required: true,
                  },
                ]}
                // Change predetermined language
                messages={{
                  sending: "Enviando...",
                  success: "Gracias por suscribirte!",
                  error: "An unexpected internal error has occurred.",
                  empty: "Tiene que ingresar tu email.",
                  duplicate:
                    "Demasiados intentos de suscripción para esta dirección de correo electrónico",
                  button: "Subscribirme!",
                }}
                className="mailchimp"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suscription;
