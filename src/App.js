import logo from './logo.svg';
import './App.css';
import Offers from "./components/Offers/Offers";
import Reviews from "./components/Reviews/Reviews";
import Nowadays from "./components/Nowadays/Nowadays";

function App() {
  return (
    <div className="App">
      <Offers/>
      <Nowadays/>
      <Reviews/>

    </div>
  );
}

export default App;
