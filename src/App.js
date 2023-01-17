import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignupPage from './pages/signup/SignUpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login title="Log in | Contra" />} />
        <Route exact path='/sign-up' element={<SignupPage title="Sign up | Contra" />} />
      </Routes>
    </div>
  );
}

export default App;
