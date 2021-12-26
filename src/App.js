import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Request from './pages/request';
import Support from './pages/support';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/request" element={<Request />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
