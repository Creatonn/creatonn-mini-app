import React from 'react';

const Header = () => {
    const buttons = [
        { id: 1, imgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', alt: 'user-1' },
        { id: 2, imgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', alt: 'user-2' },
        { id: 3, imgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', alt: 'user-3' },
        { id: 4, imgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png', alt: 'user-4' },
    ];

    const handleClick = () => {
        alert("call")
    }

    return (
        <div className="fixed bottom-1 left-1/2 -translate-x-1/2 bg-custom-beige border-2 border-black p-4 rounded-lg w-full max-w-md sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center shadow-custom-bottom-right z-50">
            <nav className="flex gap-8 ">
                {buttons.map(button => (
                    <button
                        key={button.id}
                        className="w-14 h-14 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-black focus:outline-none shadow-custom-bottom-right"
                        onClick={handleClick}
                    >
                        <img src={button.imgSrc} alt={button.alt} className="w-full h-full object-cover" />
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Header;
