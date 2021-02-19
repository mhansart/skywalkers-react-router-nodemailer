import { useEffect } from 'react';
import scrollTop from '../../function';

function Ultimate({ handler, setMenuVisibility }) {
  useEffect(() => {
    scrollTop();
    handler('ultimate');
    setMenuVisibility(false);
  }, []);
  return (
    <div className="container-content">
      <div className="container-width">
        <h2 className="title-content title-ultimate">L&apos;ultimate Frisbee</h2>
        <div className="p-i-flex">
          <div className="text-content text-left">
            <h3 className="bold">Qu&apos;est ce que c&apos;est?</h3>
            <p><span className="bold"> Sport collectif </span>par excellence, chaque joueur aura besoin de ses équipiers pour avancer puisqu&apos;il lui est<span className="bold"> interdit de se déplacer avec le disque.</span> </p>
            <p>Peu importe la surface <span className="bold">sur gazon</span> (7 vs 7), <span className="bold">en salle</span> (5 vs 5) ou <span className="bold">sur sable</span> (5 vs 5), les règles sont les mêmes, l’équipe progresse par<span className="bold">  passes successives</span> jusqu&apos;à attraper le disque dans <span className="bold"> la zone d’en-but adverse.</span> L’équipe qui défend tente d’intercepter le disque ou de le mettre au sol afin d’en prendre la possession pour attaquer à son tour.</p>
            <p className="last-p">Il s&apos;agit d’un sport<span className="bold">  sans contact, auto-arbitré.</span> Oui, c’est possible ! Les règles, bien appliquées, aideront toujours à résoudre un appel en cas de désaccord.</p>
            <div className="btn-basis"><a href="https://www.belgianultimate.be/rules/"> Découvrez les règles<i className="fas fa-caret-right" /></a></div>
          </div>
          <div className="picture"><img src="img/skywalkers_player.png" alt="skywalkers player" /></div>
        </div>
      </div>
      <div className="spirit" style={{ backgroundImage: "url('img/spirit.jpg')" }}>
        <div className="text-content">
          <h3 className="bold">Spirit of the Game</h3>
          <p>La particularité de l&apos;Ultimate Frisbee est l&apos;<span className="bold">absence d’arbitre</span>, même en compétition officielle. Chaque joueur sur le terrain est son propre arbitre, il appellera lui-même lorsqu&apos;il estime qu&apos;une faute a été commise. S&apos;il y a un désaccord entre deux joueurs, après discussion, le disque reviendra une phase en arrière pour que le jeu puisse reprendre. Dès lors, il n&apos;est plus possible de se réfugier derrière un mauvais arbitrage, <span className="bold">seule la meilleure équipe gagnera.</span></p>
          <p>À l&apos;issue de chaque match, les équipes évaluent l&apos;équipe adverse selon certains critères afin d&apos;établir <span className="bold">un classement du « Spirit of the Game ».</span> Ce classement a autant de valeur que le classement général, et est un objectif à part entière pour chaque équipe.</p>
          <p><span className="bold">Toutes ces valeurs font de l&apos;Ultimate Frisbee un sport tel que le Sport (avec un grand « S ») voudrait qu&apos;il soit.</span></p>
        </div>
      </div>
      <div className="container-width">
        <div className="p-i-flex">
          <div className="picture"><img src="img/skywalkers_duel.png" alt="Skywalkers duel" /></div>
          <div className="text-content text-right">
            <h3 className="bold">Les valeurs</h3>
            <p><span className="bold">La vitesse, la capacité athlétique, la tactique, la technique,</span> tant de choses nécessaires pour pratiquer correctement ce sport. Voici une des raisons pour laquelle nos joueurs s&apos;entraînent <span className="bold">une à trois fois par semaine.</span> </p>
            <p><span className="bold">La sportivité</span> est la seconde raison, au moins aussi importante que la première. Pour pratiquer un sport, il s&apos;agit de bien <span className="bold">maîtriser les règles et savoir les appliquer correctement.</span> </p>
            <p className="last-p">Les maîtres-mots de la discipline sont <span className="bold">« Sportivité », « Respect » et « Fair-play ».</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ultimate;
