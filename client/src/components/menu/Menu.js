import { useState, useEffect } from 'react';
import {
  NavLink,
} from 'react-router-dom';

function Menu({ footer, className }) {
  const [smartphone, setSmartphone] = useState(false);
  window.addEventListener('resize', () => {
    if (window.innerWidth < 576) {
      setSmartphone(true);
    } else {
      setSmartphone(false);
    }
  });
  useEffect(() => {
    if (window.innerWidth < 576) {
      setSmartphone(true);
    }
  }, []);
  const dflex = className ? 'd-flex' : '';
  const menuHeight = smartphone && !footer ? window.innerHeight - 104 : '';
  return (

    <div className={`container-menu ${dflex}`} style={{ height: menuHeight }}>
      <nav>
        <ul>
          <li><NavLink exact id="accueil" to="/">Accueil</NavLink></li>
          <li><NavLink id="lultimate" to="/ultimate">L&apos;Ultimate Frisbee</NavLink></li>
          <li><NavLink id="equipe" to="/equipe">Nos équipes</NavLink></li>
          <li><NavLink id="leclub" to="/club">Le club</NavLink></li>
          <li><NavLink id="lesentrainements" to="/entrainements">Les entraînements</NavLink></li>
          {footer || smartphone ? <li><NavLink id="contact" to="/contact">Contact</NavLink></li> : ''}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
