import { useEffect } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import scrollTop from '../../function';

function Club({ handler, setMenuVisibility }) {
  useEffect(() => {
    scrollTop();
    handler('club');
    setMenuVisibility(false);
  }, []);
  return (
    <div className="container-content">
      <div className="line-opacity" />
      <div className="container-width">
        <div className="club">
          <img className="victory" src="img/victory_team.png" alt="ultimate" />
          <div className="club-content">
            <h2 className="title-content">Le club</h2>
            <p><span className="bold">Créé en 2005</span>, notre club est le plus ancien représentant encore en activité de la discipline en Wallonie, certains joueurs étant présents depuis le début de l’aventure.</p>
            <p>Dès sa naissance, le club, à l’instar de la discipline, n’a cessé d’évoluer. Les valeurs telles que la<span className="bold"> mixité de genre et d’âge, le respect et le fairplay</span> sont restées nos priorités tout au long de notre croissance.</p>
            <p>Un juste mélange de <span className="bold">pédagogie, stratégie, intensité et compétitivité</span> permet à chacun de nos membres de s’épanouir et lui assure une place au sein du club, telle qu’il la recherche. Tout le monde, <span className="bold">à partir de 10 ans</span>, est le bienvenu parmi nous.</p>
            <p className="last-p">Chaque année nous engageons une ou plusieurs équipes dans chacun des championnats nationaux. Ces dernières années nous jouons systématiquement dans la moitié supérieure des différents classements. La marge de progression de chaque joueur, débutant ou confirmé, reste invariablement très grande tant le sport et son intensité sont en perpétuelle croissance.</p>
            <div className="btn-basis"><NavLink id="contact" to="/contact">Rejoins nous !<i className="fas fa-caret-right" /></NavLink></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Club;
