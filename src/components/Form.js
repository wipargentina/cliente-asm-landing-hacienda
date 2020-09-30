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

    //console.log(this.state);

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
            //isSending: false,
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
  }

  render() {
    const isSending = this.state.isSending;
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <div className='card'>
            <div className='card-body'>
              <h5>Completa tus datos aquí</h5>
              <div className='form-group'>
                <label htmlFor=''>Nombre</label>
                <input
                  type='text'
                  name='fname'
                  className='form-control'
                  onChange={this.handleChange}
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
                  required
                />
              </div>
              <div>
                <label className='mb-1'>¿Cuál es tu tema de interés?</label>
                <div className='tags'>
                  <div className='custom-control custom-radio custom-control-inline'>
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
                  <div className='custom-control custom-radio custom-control-inline'>
                    <input
                      className='custom-control-input'
                      type='radio'
                      name='tags'
                      id='tags-2'
                      onChange={this.handleOptionChange}
                      value='operaciones'
                      checked={this.state.tags === 'operaciones'}
                    />
                    <label className='custom-control-label' htmlFor='tags-2'>
                      Operar con Nosotros
                    </label>
                  </div>
                </div>
              </div>
              <button
                className='btn btn-primary btn-lg btn-block'
                type='submit'
                disabled={isSending}
              >
                {isSending ? 'ENVIANDO ...' : '¡REGISTRARME!'}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
