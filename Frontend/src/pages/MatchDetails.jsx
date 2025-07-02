import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../styles/MatchDetails.css';

function MatchDetails() {
  const { id } = useParams();
  const location = useLocation();
  const match = location.state;

  if (!match) {
    return <div className="match-detail-container">Match data not available.</div>;
  }

  return (
    <div className="match-detail-container">
      <h1>Match Details</h1>
      <div className="match-info">
        <h2>{match.homeTeam} vs {match.awayTeam}</h2>
        <p><strong>Score:</strong> {match.homeScore} - {match.awayScore}</p>
        <p><strong>Status:</strong> {match.status}</p>
        {/* Add: Goals, Lineups, Timeline etc. */}
      </div>
    </div>
  );
}

export default MatchDetails;
