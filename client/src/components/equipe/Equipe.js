import { useEffect } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import scrollTop from '../../function';

function Entrainement({ handler, setMenuVisibility }) {
  useEffect(() => {
    scrollTop();
    handler('equipe');
    setMenuVisibility(false);
  }, []);
  return (
    <div className="container-content">
      <div className="container-width">
        <h2 className="title-content">Nos équipes</h2>
        <div className="p-i-flex">
          <div className="text-content text-left">
            <h3 className="title-category title-equipe">Adultes</h3>
            <p>
              De <span className="bold">17 à 117 ans</span>, nous accueillons <span className="bold">tout le monde</span>. Aucune expérience ? Pas de soucis, aucun de nous n&apos;avait d’expérience avant d&apos;intégrer l&apos;équipe, <span className="bold">tout s&apos;apprend</span>, et relativement vite en plus.
            </p>
            <p className="last-p">L&apos;équipe adulte participe à tous <span className="bold">les championnats nationaux</span>, et chacun y trouvera sa place, quel que soit le niveau. Elle participe également à <span className="bold">de nombreux tournois</span> tout au long de l&apos;année (<span className="bold">en Belgique et partout en Europe</span>).</p>
            <div className="btn-basis equipe-contact"><NavLink id="entrainements" to="/entrainements">Voir les horaires d&apos;entrainements<i className="fas fa-caret-right" /> </NavLink></div>
          </div>
          <img src="img/equipe-adulte.jpg" alt="équipe adultes" className="photo-equipe" />
        </div>
        <div className="p-i-flex">
          <img src="img/equipe-junior.jpg" alt="équipe junior" className="photo-equipe" />
          <div className="text-content text-right">
            <h3 className="title-category title-equipe">Juniors</h3>

            <p>
              De <span className="bold">10 à 17 ans</span>, nous accueillons également <span className="bold">tout le monde</span>. Notre <span className="bold">école de jeune</span> est une de nos plus grande force. De bons coachs et des joueurs motivés, <span className="bold">débutants ou confirmés</span>, sont les artisans de la constante progression de tous nos jeunes. Ce qui nous permet chaque année de découvrir de <span className="bold">nouvelles pépites</span>
            </p>
            <p className="last-p">L&apos;équipe junior participe à tous <span className="bold">les championnats nationaux</span>, et renforce quelques fois l&apos;équipe adulte lorsqu&apos;elle manque d&apos;effectif.</p>
            <div className="btn-basis equipe-contact"><NavLink id="entrainements" to="/entrainements">Voir les horaires d&apos;entrainements<i className="fas fa-caret-right" /> </NavLink></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Entrainement;
