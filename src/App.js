import './App.css';
import LoginForm from "./component/Login";
import { handleLogin } from './hooks';

function App() {
  return (
    <div className="App">
      <h1>User Login</h1>
      <LoginForm handleSubmit={handleLogin}/>
    </div>
  );
}

export default App;
