import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Teams.css';

function Teams() {
  const teams = [
    { id: 1, name: 'Team A', formation: '4-3-3', xG: 1.85, possession: '62%' },
    { id: 2, name: 'Team B', formation: '3-5-2', xG: 0.97, possession: '45%' },
    // Add more mock teams or fetch from API
  ];

  return (
    <div className="teams-container">
      <h1 className="teams-heading">Team Insights</h1>
      <p className="teams-description">
        Explore formations, xG stats, and possession heatmaps.
      </p>

      <div className="teams-grid">
        {teams.map((team) => (
          <Link to={`/teams/${team.id}`} className="team-card" key={team.id}>
            <h2>{team.name}</h2>
            <p>Formation: {team.formation}</p>
            <p>xG: {team.xG}</p>
            <p>Possession: {team.possession}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Teams;
