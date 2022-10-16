import logo from './logo.svg';
import './App.css';
import Navbar from './comps/Navbar';
import Main1 from './comps/Main1';
import Main2 from './comps/Main2';
import Main3 from './comps/Main3';
import Main4 from './comps/Main4';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer />
    </div>
  );
}

export default App;
