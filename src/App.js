import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import logo from './logo.svg';
import Offers from "./components/Offers/Offers";
import Reviews from "./components/Reviews/Reviews";
import Nowadays from "./components/Nowadays/Nowadays";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Offers/>
      <Nowadays/>
      <Reviews/>

    </div>
  );
}

export default App;
