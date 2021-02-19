import { NavLink } from 'react-router-dom';
import { ReactComponent as Facebook } from './facebook.svg';

const { default: Menu } = require('../menu/Menu');

function Header({ isVisible, menuVisibility, setMenuVisibility }) {
  const dNone = !isVisible ? 'd-none' : '';
  const showMenu = () => {
    setMenuVisibility(!menuVisibility);
  };
  return (
    <header className={`header ${dNone}`}>
      <div className="container-menu-fixe">
        <div className="logodark">
          <NavLink exact id="accueil" to="/">
            <img src="img/logotype_blue_lt.png" alt="logo dark" />
          </NavLink>
        </div>
        <div className="d-flex-menu">
          <div className="menuconnexion-menuFixe">
            <a
              className="facebook"
              href="https://www.facebook.com/ultimateskywalkers/"
              alt="facebook"
            >
              <Facebook />
            </a>
            <div className="connexion btn-basis">
              <NavLink id="contact" to="/contact">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="menuaccueil-menuFixe">
            <Menu footer={false} className={menuVisibility} />
            <div onClick={showMenu} className="menu-burger">
              <div className="burger-line line1" />
              <div className="burger-line line2" />
              <div className="burger-line line3" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
