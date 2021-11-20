import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Cart from './Components/Cart';
import Registration from './Components/Auth/Registration';
import Login from './Components/Auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" exact element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
