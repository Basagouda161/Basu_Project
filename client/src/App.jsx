import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/profile';

export default function App(){
  return<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Profile" element={<Profile/>} />

    </Routes>
  </BrowserRouter>;
}