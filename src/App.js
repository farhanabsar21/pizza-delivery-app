import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
