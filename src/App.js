<<<<<<< HEAD
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import Hiring from "./pages/hiringP2/Hiring";
=======
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
>>>>>>> 73f4f2d (Login page)

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Login title="Log in | Contra" />} />
        <Route path="/sign-up" element={<Signup title="Sign up | Contra" />} />
        <Route path="/hiring" element={<Hiring />} />
=======
        <Route exact path='/' element={<Login />} />
>>>>>>> 73f4f2d (Login page)
      </Routes>
    </div>
  );
}

export default App;
