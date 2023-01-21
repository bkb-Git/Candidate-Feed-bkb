import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";
import Hiring from "./pages/hiringP2/Hiring";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login title="Log in | Contra" />} />
        <Route path="/sign-up" element={<Signup title="Sign up | Contra" />} />
        <Route path="/hiring" element={<Hiring />} />
      </Routes>
    </div>
  );
}

export default App;
