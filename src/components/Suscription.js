import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form';

class Suscription extends Component {
  render() {
    return (
      <div className='suscription'>
        <div className='container'>
          <h3>Suscribite a nuestro Newsletter</h3>
          <h5 className='mb-4'>
            Ingresá tu correo y recibí todas las novedades de los próximos
            remates.
          </h5>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
              <Mailchimp
                action='https://alfredosmondino.us17.list-manage.com/subscribe/post?u=cc0fa9a90b6de679e1432e53a&amp;id=0d65fc1ee6'
                fields={[
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                  }
                ]}
                // Change predetermined language
                messages={{
                  sending: 'Enviando...',
                  success: 'Gracias por suscribirte!',
                  error: 'Ha ocurrido un error interno inesperado.',
                  empty: 'Tiene que ingresar tu email.',
                  duplicate:
                    'Su correo ya se encuentra en nuestra base de datos',
                  button: 'Enviar!'
                }}
                className='mailchimp'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suscription;
