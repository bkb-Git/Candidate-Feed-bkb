import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/log-in"
          element={<Login title="Log in | Contra" />}
        />
      </Routes>
    </div>
  );
}

export default App;
