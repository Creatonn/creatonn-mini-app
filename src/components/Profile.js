import React from 'react';

const Profile = () => {
    const user = {
        imgSrc: 'https://www.pixelstalk.net/wp-content/uploads/image10/Desktop-Background-Stitch-HD-620x338.jpg',
        username: 'UserName',
        postCount: 120,
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <div className='w-full flex justify-end'>
                <div className="w-4/12 flex items-center bg-white rounded-full mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                        <img
                            src="/images/profile/coin.png"
                            alt="User Profile"
                            className="w-12 h-12 md:w-48 md:h-48 rounded-full object-cover"
                        />
                    </div>
                    <span className="mx-4 text-lg md:text-xl font-semibold text-gray-800">
                        {user.postCount}
                    </span>
                </div>
            </div>
            <div className="relative w-full flex items-center justify-center my-8">
                <div className="flex-1 flex justify-center">
                    <img
                        src={user.imgSrc}
                        alt="User-Profile"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
                    />
                </div>
            </div>
            <p className="my-4 text-lg md:text-2xl font-semibold text-gray-700">{user.username}</p>
            <hr className="w-full max-w-5xl mt-2 mb-8 border-slate-900" />
            <div className="user-posts w-full max-w-5xl flex flex-col items-center justify-center mt-8 mb-[5rem]">
                <img
                    src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Angry-Birds-Animation-Movie-HD-Wallpaper-620x388.jpg"
                    alt="No Posts"
                    className="w-64 h-64 md:w-32 md:h-32 rounded-full object-cover mb-4"
                />
                <span className="text-lg md:text-xl font-semibold text-gray-600">No Post Yet</span>
            </div>
        </div>
    );
};

export default Profile;
