import './styles/main.css';

import {BrowserRouter as HashRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path='/Portfolio_React_Artur' element={<Home />} />
          <Route path='/Portfolio_React_Artur/projects' element={<Projects />} />
          <Route path='/Portfolio_React_Artur/project/:id' element={<Project />} />
          <Route path='/Portfolio_React_Artur/contacts' element={<Contacts />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
