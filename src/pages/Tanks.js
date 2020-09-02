import React from "react";

import faFacebook from "../assets/static/facebook-f-brands.svg";
import faInstagram from "../assets/static/instagram-brands.svg";
import faTwitter from "../assets/static/twitter-brands.svg";
import faWhatsapp from "../assets/static/whatsapp-brands.svg";

function Tanks(props) {
  return (
    <div className="tanks">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2>Gracias por registrarte</h2>
            <p className="lead mb-5">
              Uno de nuestros comerciales se pondrán en contacto contigo
            </p>
            <h4 className="mt-3 mb-3">Escribinos por Whatsapp</h4>
            <div className="whatsapp">
              <div className="row justify-content-center">
                <div className="col-md-3">
                  <h5>Hacienda Gorda</h5>
                  <h6>Francisco Garin</h6>
                  <a
                    href="https://wa.me/543516509975"
                    className="btn btn-success"
                  >
                    <img src={faWhatsapp} alt="" /> +54 351 650 9975
                  </a>
                </div>
                <div className="col-md-3">
                  <h5>Invernada y Cría</h5>
                  <h6>Mario Masanti</h6>
                  <a
                    href="https://wa.me/3583647964"
                    className="btn btn-success"
                  >
                    <img src={faWhatsapp} alt="" /> +54 358 3647 964
                  </a>
                </div>
                <div className="col-md-3">
                  <h5>Reproductores</h5>
                  <h6>Leonardo Pérez</h6>
                  <a
                    href="https://wa.me/543583640202"
                    className="btn btn-success"
                  >
                    <img src={faWhatsapp} alt="" /> +54 358 3640 202
                  </a>
                </div>
              </div>
            </div>
            <h4 className="mb-2">Te invitamos a visites nuestra web</h4>
            <a
              href="https://alfredosmondino.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://alfredosmondino.com/
            </a>
            <h4 className="mt-3">o que nos sigas en nuestras redes</h4>
            <div className="social">
              <a
                href="https://es-la.facebook.com/alfredosmondino/"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-link"
              >
                <img src={faFacebook} alt="facebook" />
              </a>
              <a
                href="https://twitter.com/alfredosmondino"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-link"
              >
                <img src={faInstagram} alt="instagram" />
              </a>
              <a
                href="https://twitter.com/alfredosmondino"
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-link"
              >
                <img src={faTwitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tanks;
