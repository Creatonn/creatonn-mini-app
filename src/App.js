import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Profile from './components/Profile';
import Leadership from './components/Leadership';
import UserProfile from './components/UserProfile'

function App() {
  return (
    <Router>
      <div className="App bg-[#add8e6]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaders" element={<Leadership />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
