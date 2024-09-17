import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

const ConnectWallet = () => {

    return (
        <div className="flex justify-between items-center p-4 bg-transparent">
            <img src="/images/logo.png" alt="Logo" className="w-16 h-16" />
            {/* <button className="w-1/2 lg:w-[15%] h-14 px-2 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase" onClick={handleWalletConnect}>
                Connect Wallet
            </button> */}
            <TonConnectButton className='w-1/2 lg:w-[15%] h-14 px-2 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase' />
        </div>
    );
};

export default ConnectWallet;
