import { useEffect } from 'react';
import scrollTop from '../../function';
import Menu from '../menu/Menu';

function Accueil({ handler, setMenuVisibility }) {
  useEffect(() => {
    scrollTop();
    handler('accueil');
    setMenuVisibility(false);
  }, []);
  return (
    <div className="accueil" style={{ backgroundImage: "url('img/accueil.JPG')" }}>
      <div className="container-accueil">
        <div className="logo_big"><img src="img/logo.png" alt="logo" /></div>
        <h1 className="title title--big">Club d&apos;ultimate frisbee</h1>
        <h2 className="title title--little"><span className="point">•</span> à Braine l&apos;Alleud et à la Hulpe <span className="point">•</span></h2>
        <Menu footer handler={handler} />
      </div>
    </div>

  );
}

export default Accueil;
