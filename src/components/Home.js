import React from 'react';
import Card from './Card';

const Home = () => {
    const cards = [
        { id: 1, title: 'Loreum Ispum', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png' },
        { id: 2, title: 'Loreum Ispum', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png' },
        { id: 3, title: 'Loreum Ispum', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png' },
        { id: 4, title: 'Loreum Ispum', description: 'Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.', imgSrc: '/images/cards/dummy.jpg', profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 pb-32 -mt-4 ">
            <div className="bg-custom-beige p-4 border-2 border-black rounded-lg shadow-custom-bottom-right w-full max-w-7xl mx-auto overflow-y-hidden">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            description={card.description}
                            profileImgSrc={card.profileImgSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
