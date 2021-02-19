import {
  NavLink,
} from 'react-router-dom';
import Menu from '../menu/Menu';

function Footer({ isVisible }) {
  const dNone = !isVisible ? 'd-none' : '';
  return (
    <footer className={` ${dNone}`}>
      <div className="subfooter" style={{ backgroundImage: "url('img/footer.png')" }}>
        <div className="btn-basis see-more-fb"><a href="https://www.facebook.com/ultimateskywalkers/">Retrouvez toutes nos actualités et nos évènements sur facebook <i className="fas fa-caret-right" /> </a></div>
      </div>
      <div className="container-footer">
        <NavLink exact id="accueil" to="/"><img src="img/logotype_white_lt.png" alt="petit logo" /></NavLink>
        <Menu footer />
      </div>
    </footer>
  );
}

export default Footer;
