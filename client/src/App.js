import './styles/style.scss';
import { useState } from 'react';
import {
  Route,
  BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import Header from './components/header/Header';
import Accueil from './components/accueil/Accueil';
import Footer from './components/footer/Footer';
import Club from './components/club/Club';
import Equipe from './components/equipe/Equipe';
import Ultimate from './components/ultimate/Ultimate';
import Contact from './components/contact/Contact';
import Entrainement from './components/entrainement/Entrainement';

function App() {
  const [pageVisible, setPageVisible] = useState('accueil');
  const [menuVisibility, setMenuVisibility] = useState(false);
  const headerVisible = pageVisible !== 'accueil';
  const height = pageVisible === 'accueil' ? `${window.innerHeight}px` : '';

  return (
    <HashRouter>
      <div className="App" style={{ height }}>
        <Header isVisible={headerVisible} setMenuVisibility={setMenuVisibility} menuVisibility={menuVisibility} />
        <Route exact path="/"><Accueil handler={setPageVisible} setMenuVisibility={setMenuVisibility} /></Route>
        <Route path="/club"><Club handler={setPageVisible} setMenuVisibility={setMenuVisibility} /></Route>
        <Route path="/ultimate"><Ultimate handler={setPageVisible} setMenuVisibility={setMenuVisibility} /></Route>
        <Route path="/equipe"><Equipe handler={setPageVisible} setMenuVisibility={setMenuVisibility} /></Route>
        <Route path="/entrainements"><Entrainement handler={setPageVisible} setMenuVisibility={setMenuVisibility} /></Route>
        <Route path="/contact"><Contact handler={setPageVisible} setMenuVisibility={setMenuVisibility} /></Route>

        <Footer isVisible={headerVisible} />
      </div>
    </HashRouter>
  );
}

export default App;
