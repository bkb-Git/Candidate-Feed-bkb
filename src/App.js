import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Hiring from "./pages/hiringP2/Hiring";
import HiringP1 from "./pages/hiringP1/Hiring";
import logo from "./logo.svg";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login title="Log in | Contra" />} />
        <Route path="/sign-up" element={<Signup title="Sign up | Contra" />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/hiring/p1" element={<HiringP1 />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
