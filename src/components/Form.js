import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      location: '',
      tags: 'remates',
      isSending: false,
      isSended: false,
      isError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOptionChange(e) {
    this.setState({
      tags: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSending: true
    });

    axios
      .post(
        'https://alfredosmondino.wipargentina.com/backend/mail.php',
        this.state
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            fname: '',
            lname: '',
            email: '',
            phone: '',
            location: '',
            isSended: true
          });
          window.location.assign(process.env.PUBLIC_URL + '/gracias');
        }
        if (response.status === 400) {
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isError: true
        });
      });

    //console.log(this.state);
    // window.location.assign(process.env.PUBLIC_URL + '/gracias');
  }

  render() {
    const isSending = this.state.isSending;
    const event = this.props.event;
    return (
      <div id='register' className='form'>
        <form onSubmit={this.handleSubmit}>
          <div className='card'>
            <div className='card-body'>
              <h5>Completa con tus datos aquí</h5>
              <div className='form-group'>
                <label htmlFor=''>Nombre</label>
                <input
                  type='text'
                  name='fname'
                  className='form-control'
                  onChange={this.handleChange}
                  placeholder='Nombre'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Apellido</label>
                <input
                  type='text'
                  name='lname'
                  className='form-control'
                  onChange={this.handleChange}
                  placeholder='Apellido'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Teléfono</label>
                <input
                  type='tel'
                  name='phone'
                  className='form-control'
                  onChange={this.handleChange}
                  placeholder='Teléfono'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  name='email'
                  className='form-control'
                  onChange={this.handleChange}
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-group mb-2'>
                <label htmlFor=''>Localidad</label>
                <input
                  type='text'
                  name='location'
                  className='form-control'
                  onChange={this.handleChange}
                  placeholder='Localidad'
                  required
                />
              </div>
              <div className='tags'>
                <label className='mb-1'>¿Cuál es tu tema de interés?</label>
                <div className=''>
                  <div className='custom-control custom-radio'>
                    <input
                      className='custom-control-input'
                      type='radio'
                      name='tags'
                      id='tags-1'
                      value='remates'
                      onChange={this.handleOptionChange}
                      checked={this.state.tags === 'remates'}
                    />
                    <label className='custom-control-label' htmlFor='tags-1'>
                      Próximo Remate
                    </label>
                  </div>
                  {event.map((event, index) => (
                    <React.Fragment key={index}>
                      {event.link_preoferta && (
                        <div className='custom-control custom-radio'>
                          <input
                            className='custom-control-input'
                            type='radio'
                            name='tags'
                            id='tags-2'
                            value='pre-oferta'
                            onChange={this.handleOptionChange}
                            checked={this.state.tags === 'pre-oferta'}
                          />
                          <label
                            className='custom-control-label'
                            htmlFor='tags-2'
                          >
                            Pre Oferta
                          </label>
                        </div>
                      )}
                    </React.Fragment>
                  ))}

                  <div className='custom-control custom-radio'>
                    <input
                      className='custom-control-input'
                      type='radio'
                      name='tags'
                      id='tags-3'
                      onChange={this.handleOptionChange}
                      value='cereales'
                      checked={this.state.tags === 'cereales'}
                    />
                    <label className='custom-control-label' htmlFor='tags-3'>
                      Cereales
                    </label>
                  </div>

                  <div className='custom-control custom-radio'>
                    <input
                      className='custom-control-input'
                      type='radio'
                      name='tags'
                      id='tags-4'
                      onChange={this.handleOptionChange}
                      value='operaciones'
                      checked={this.state.tags === 'operaciones'}
                    />
                    <label className='custom-control-label' htmlFor='tags-4'>
                      Otras Operaciones
                    </label>
                  </div>
                </div>
              </div>
              <button
                className='btn btn-lg btn-success btn-block'
                type='submit'
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    Enviando
                    <div
                      className='spinner-border spinner-grow-sm'
                      role='status'
                    ></div>
                  </>
                ) : (
                  <>Enviar Registro</>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
