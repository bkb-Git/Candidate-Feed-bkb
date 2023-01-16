import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login title="Log in | Contra" />} />
      </Routes>
    </div>
  );
}

export default App;
