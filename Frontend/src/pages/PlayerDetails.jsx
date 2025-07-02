import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/PlayerDetails.css';

function PlayerDetails() {
  const { playerId } = useParams();

  // Placeholder AI model insights
  const mockAIInsights = {
    performanceScore: '8.6/10',
    injuryRisk: 'Low',
    predictedNextMatchImpact: 'High',
    staminaLevel: '87%',
  };

  return (
    <div className="player-details-container">
      <h1>Player #{playerId} - AI Insights</h1>
      
      <div className="insight-card">
        <h2>Performance Score</h2>
        <p>{mockAIInsights.performanceScore}</p>
      </div>
      <div className="insight-card">
        <h2>Injury Risk</h2>
        <p>{mockAIInsights.injuryRisk}</p>
      </div>
      <div className="insight-card">
        <h2>Next Match Impact</h2>
        <p>{mockAIInsights.predictedNextMatchImpact}</p>
      </div>
      <div className="insight-card">
        <h2>Stamina Level</h2>
        <p>{mockAIInsights.staminaLevel}</p>
      </div>
    </div>
  );
}

export default PlayerDetails;
