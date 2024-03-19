import logo from './logo.svg';
import './App.css';
import Text from "./Components/Text"
import Profile from './screens/Profile';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-sky-300'>
    {/* route == /login <Login/> */}
    {/* route == /register <Register/> */}
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;

