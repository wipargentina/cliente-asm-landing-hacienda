import React from 'react';
import { Link as Scroll } from 'react-scroll';

export default function Cereals() {
  return (
    <div className='cereals'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <h3 className='mb-3'>Cereales e Insumos para Agro</h3>
            <p>
              La empresa cuenta con una amplia variedad de productos e insumos
              para el agro, seleccionando nuestros proveedores estratégicamente,
              atendiendo a distintos niveles tecnológicos según la zona y
              necesidades de nuestros clientes, pero siempre con la mejor
              calidad.
            </p>
            <p>
              La empresa con el tiempo desarrolló con éxito el área de acopio de
              cereales, actualmente cuenta con plantas ubicadas en el sur de la
              provincia de córdoba y un sistema de logística que satisface todas
              las necesidades de acopio y acondicionamiento de granos de
              nuestros clientes en todo el país, dando agilidad y confianza en
              el manejo de su mercadería con el compromiso que nos caracteriza.
            </p>
            <Scroll
              to='register'
              spy={true}
              smooth={true}
              offset={-120}
              duration={599}
              className='btn btn-light mt-3'
            >
              Más información
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}
