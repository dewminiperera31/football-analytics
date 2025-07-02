// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Match from './pages/Match';
import Teams from './pages/Teams';
import Players from './pages/Players';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import MatchDetails from './pages/MatchDetails';
import TeamDetails from './pages/TeamDetails';
 import PlayerDetails from './pages/PlayerDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="match" element={<Match />} />
          <Route path="teams" element={<Teams />} />
          <Route path="players" element={<Players />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/match/:id" element={<MatchDetails />} />
          <Route path="/teams/:teamId" element={<TeamDetails />} />
         <Route path="/players/:playerId" element={<PlayerDetails />} />


            
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
