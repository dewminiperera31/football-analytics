import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Match.css';

function Match() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('live');
  const [liveMatches, setLiveMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLiveMatches = async () => {
    try {
      const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
        headers: {
          'X-RapidAPI-Key': 'YOUR_API_KEY_HERE',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
      const matches = response.data.response.map((fixture) => ({
        id: fixture.fixture.id,
        homeTeam: fixture.teams.home.name,
        awayTeam: fixture.teams.away.name,
        homeScore: fixture.goals.home,
        awayScore: fixture.goals.away,
        status: fixture.fixture.status.elapsed + `'`
      }));
      setLiveMatches(matches);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch live matches:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveMatches();

    const interval = setInterval(fetchLiveMatches, 30000); // refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (match) => {
    navigate(`/match/${match.id}`, { state: match });
  };

  return (
    <div className="match-container">
      <h1>Match Center</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === 'live' ? 'active' : ''}
          onClick={() => setActiveTab('live')}
        >
          Live
        </button>
        <button
          className={activeTab === 'results' ? 'active' : ''}
          onClick={() => setActiveTab('results')}
        >
          Results
        </button>
      </div>

      {activeTab === 'live' && (
        <section>
          <h2 className="section-title">Live Scores</h2>
          <div className="match-list">
            {loading ? (
              <p>Loading live matches...</p>
            ) : liveMatches.length ? (
              liveMatches.map((match) => (
                <div
                  key={match.id}
                  className="match-card live"
                  onClick={() => handleCardClick(match)}
                >
                  <div className="teams">
                    <span className="team">{match.homeTeam}</span>
                    <span className="score">{match.homeScore} - {match.awayScore}</span>
                    <span className="team">{match.awayTeam}</span>
                  </div>
                  <div className="status">{match.status}</div>
                </div>
              ))
            ) : (
              <p>No live matches available.</p>
            )}
          </div>
        </section>
      )}

      {activeTab === 'results' && (
        <section>
          <h2 className="section-title">Results</h2>
          <p>Coming soon...</p>
        </section>
      )}
    </div>
  );
}

export default Match;
