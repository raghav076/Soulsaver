import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Donate from './pages/donate';
import Request from './pages/request';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/request" element={<Request />} />
      </Routes>
    </>
  );
}

export default App;
