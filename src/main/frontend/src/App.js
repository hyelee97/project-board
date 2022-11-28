import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './view/home';
import About from './view/about';
import Profile from './view/profile';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/profile">Profile</Link>
    </nav>
    <header>==Header============================</header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <footer>==Footer============================</footer>
    </BrowserRouter>
  );
}

export default App;
