import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import ConnectWallet from './ConnectWallet';

const Home = () => {
    const navigate = useNavigate();

    const cards = [
        { id: 1, title: 'User 1', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', points: 1200, leaderboardRank: 5 },
        { id: 2, title: 'User 2', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', points: 1200, leaderboardRank: 3 },
        { id: 3, title: 'User 1', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', points: 1200, leaderboardRank: 1 },
        { id: 4, title: 'User 2', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', points: 1200, leaderboardRank: 2 },
        { id: 5, title: 'User 3', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', points: 1200, leaderboardRank: 6 },
        { id: 6, title: 'User 1', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', points: 1200, leaderboardRank: 4 },
    ];

    const handleCardClick = (user) => {
        navigate(`/profile/${user.id}`, { state: { userTitle: user.title, cards } });
    };

    return (
        <>
            <ConnectWallet />
            <div className="flex flex-col items-center justify-center min-h-screen p-6 pb-32 -mt-4 ">
                <div className="bg-custom-beige p-4 border-2 border-black rounded-lg shadow-custom-bottom-right w-full max-w-7xl mx-auto overflow-y-hidden">
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {cards.map((card) => (
                            <div key={card.id} onClick={() => handleCardClick(card)}>
                                <Card
                                    key={card.id}
                                    imgSrc={card.imgSrc}
                                    title={card.title}
                                    description={card.description}
                                    profileImgSrc={card.profileImgSrc}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
