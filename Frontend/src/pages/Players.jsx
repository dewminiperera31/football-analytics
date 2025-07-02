import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Players.css';

function Players() {
  const players = [
    { id: 1, name: 'Lionel Messi', position: 'Forward', team: 'Inter Miami' },
    { id: 2, name: 'Erling Haaland', position: 'Striker', team: 'Man City' },
    { id: 3, name: 'Kevin De Bruyne', position: 'Midfielder', team: 'Man City' },
    // Add more mock players or fetch dynamically
  ];

  return (
    <div className="players-container">
      <h1 className="players-heading">Player Insights</h1>
      <p className="players-description">
        Click on a player to view AI-generated performance analytics.
      </p>

      <div className="players-grid">
        {players.map(player => (
          <Link to={`/players/${player.id}`} key={player.id} className="player-card">
            <h2>{player.name}</h2>
            <p>{player.position}</p>
            <p>Team: {player.team}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Players;
