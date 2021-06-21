import './App.css';
import { CardComponent } from "./components/CardComponent";
import { NavBar } from "./components/NavBar";
import { CartWidget } from "./components/CartWidget";

function App() {
  return (
  <div className="App">
    <header className="navConteiner">
      <NavBar/>
      <CartWidget/>
      <h1>probando 2</h1>
    </header>
      <CardComponent/>
    
</div>
  );
}

export default App;
