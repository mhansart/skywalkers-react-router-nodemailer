import { useEffect } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import scrollTop from '../../function';

function Entrainement({ handler, setMenuVisibility }) {
  useEffect(() => {
    scrollTop();
    handler('entrainement');
    setMenuVisibility(false);
  }, []);
  return (
    <div className="container-content">
      <div className="container-width">
        <h2 className="title-content">Les entraînements</h2>
        <h3 className="title-category">Adultes</h3>
        <div className="p-i-flex">
          <div className="cart">
            <p>Tous les <span className="bold"> lundis</span> de <span className="bold">20h à 22h</span></p>
            <p>Stade Gaston Reiff de Braine L&apos;Alleud</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2130704565607!2d4.384038516034073!3d50.67886987950748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d2004e5708b1%3A0xd7be4c0dd702355c!2sComplexe%20Gaston%20Reiff!5e0!3m2!1sfr!2sbe!4v1601550056218!5m2!1sfr!2sbe" width="100%" height="320" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" />
          </div>
          <div className="cart">
            <p>Tous les <span className="bold"> jeudis</span> de <span className="bold">20h à 22h</span></p>
            <p>Centre sportif Solvay de La Hulpe</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.0284243061124!2d4.483566116035862!3d50.73796167951589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d0c9e4eecc07%3A0xdaa7a74e1dfbf11e!2sRugby%20Club%20La%20Hulpe!5e0!3m2!1sfr!2sbe!4v1601550103676!5m2!1sfr!2sbe" width="100%" height="320" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" />
          </div>
        </div>
        <h3 className="title-category">Junior</h3>
        <div className="cart">
          <p>Tous les <span className="bold"> mercredis</span> de <span className="bold">15h à 17h</span></p>
          <p>Centre sportif Solvay de La Hulpe</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.0284243061124!2d4.483566116035862!3d50.73796167951589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3d0c9e4eecc07%3A0xdaa7a74e1dfbf11e!2sRugby%20Club%20La%20Hulpe!5e0!3m2!1sfr!2sbe!4v1601550103676!5m2!1sfr!2sbe" width="100%" height="320" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0" />
        </div>
        <div className="btn-basis contact-training"><NavLink id="contact" to="/contact">Plus d&apos;infos? Contactez-nous<i className="fas fa-caret-right" /> </NavLink></div>
      </div>
    </div>
  );
}

export default Entrainement;
