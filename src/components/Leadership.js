import React from 'react';

const Leadership = () => {

    const leaders = [
        { id: 1, imgSrc: '/images/leaderboard/user-profile.png', username: 'User1', coins: 150 },
        { id: 2, imgSrc: '/images/leaderboard/user-profile.png', username: 'User2', coins: 120 },
        { id: 3, imgSrc: '/images/leaderboard/user-profile.png', username: 'User3', coins: 100 },
        { id: 4, imgSrc: '/images/leaderboard/user-profile.png', username: 'User4', coins: 100 },
    ];

    return (
        <div className="min-h-screen p-6">
            <div className="flex justify-between items-center p-4 bg-custom-gray border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                <div className="flex items-center">
                    <img src="/images/leaderboard/tokens.png" alt="tokens" className="w-12 h-12 rounded-full mr-4" />
                    <span className="text-xl font-semibold font-sans text-gray-700">1500</span>
                </div>
                <div className="flex items-center">
                    <img src="/images/leaderboard/cup.png" alt="cup" className="w-14 h-10 rounded-full" />
                    <span className="text-xl font-semibold font-sans text-gray-700">10</span>
                </div>
            </div>
            <div className="text-3xl font-bold py-10 text-left font-sans text-card-title">
                Leadership Board
            </div>
            <div className="flex justify-start items-center mb-8 gap-4">
                <div className="coin-section flex items-center">
                    <span className='text-base font-sans font-semibold text-gray-500'>Total Users &nbsp;:&nbsp; </span>
                    <span className="text-xl font-bold font-sans text-gray-700">1500</span>
                </div>

                <div className="flex items-center">
                    <span className='text-base font-sans font-semibold text-gray-500'>Your rank &nbsp;:&nbsp; </span>
                    <span className="text-xl font-bold font-sans text-gray-700">10</span>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                {leaders.map(leader => (
                    <div key={leader.id} className="flex items-center mb-4 p-4 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                        <img src={leader.imgSrc} alt={leader.username} className="w-12 h-12 rounded-full mr-4" />
                        <div className="flex flex-1 justify-between items-center">
                            <span className="text-lg font-semibold font-sans text-gray-700">{leader.username}</span>
                            <div className="flex items-center">
                                <img src="/images/leaderboard/tokens.png" alt={leader.username} className="w-12 h-12 rounded-full mr-4" />
                                <span className="text-lg font-semibold font-sans text-gray-700">{leader.coins}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
