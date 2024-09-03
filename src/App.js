import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import ConnectWallet from './components/ConnectWallet';

function App() {
  return (
    <div className="App bg-[#add8e6]">
      <ConnectWallet />
      <Home />
      <Header />
    </div>
  );
}

export default App;
