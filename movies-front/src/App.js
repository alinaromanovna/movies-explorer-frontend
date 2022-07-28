import './App.css';
import Promo from './components/Main/Promo';
import AboutProject from './components/Main/AboutProject';
import Techs from './components/Main/Techs';
import AboutMe from './components/Main/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
