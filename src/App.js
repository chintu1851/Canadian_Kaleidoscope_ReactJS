import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import History from './History';
import Events from './Events';
import Heritage from './Heritage';
import Header from './Header';
import Footer from './Footer';
import Resources from './Resources';
import About from './About';
import Contact from './Contact';
import Explore from './Explore';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='history' element={<History></History>}></Route>
          <Route path='events' element={<Events></Events>}></Route>
          <Route path='heritage' element={<Heritage></Heritage>}></Route>
          <Route path='header' element={<Header></Header>}></Route>
          <Route path='resources' element={<Resources></Resources>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='explore' element={<Explore></Explore>}></Route>
          <Route path='footer' element={<Footer></Footer>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
