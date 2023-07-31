import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
    <Login/>
      {/* <BrowserRouter>
      <div>
      <Routes>
      <Route path="/" element={<Login/>} /> 
      </Routes>
      </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
