import React from 'react';

const ConnectWallet = () => {
    const handleWalletConnect = () => {
        alert("wallet connect")
    }
    return (
        <div className="flex justify-between items-center p-4 bg-transparent">
            <img src="https://iconape.com/wp-content/png_logo_vector/sk-creation-logo.png" alt="Logo" className="w-16 h-16" />
            <button className="w-2/5 h-14 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase" onClick={handleWalletConnect}>
                Connect Wallet
            </button>
        </div>
    );
};

export default ConnectWallet;
