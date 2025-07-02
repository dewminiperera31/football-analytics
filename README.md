# ⚽ Football Analytics Platform

A full-stack football analytics web app offering real-time match data, player insights, and team stats powered by machine learning.

---

## 🚀 Features

### 🖥️ Frontend (React + Tailwind CSS)
- Real-time live match dashboard
- Event timeline: goals, cards, substitutions
- Win/Draw/Lose probability visualizer
- Player comparison: passing accuracy, distance, shots
- Team analytics: possession, xG, pressing efficiency
- Responsive UI with Tailwind CSS

### 🧠 AI Model (Jupyter + Scikit-learn/XGBoost)
- Predictive modeling: match outcome probabilities
- Expected Goals (xG) calculations
- Model training notebooks
- Pre-trained models saved as `.pkl` files

### 🔧 Backend (Python + Flask or FastAPI)
- REST API to serve:
  - Live match data (mocked or scraped)
  - Player & team statistics
  - AI model predictions (win % / xG)
- CORS + JSON support
- Easy integration with frontend

---

## 🗂️ Project Structure

```plaintext
football-analytics/
├── frontend/        # React + Tailwind
├── backend/         # Python API (Flask or FastAPI)
├── notebooks/       # Jupyter notebooks for model training
├── models/          # Trained ML models (e.g., xg_model.pkl)
├── data/            # Datasets (CSV, JSON, etc.)
└── README.md
