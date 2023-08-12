import Image from 'next/image';
import React from 'react';
import profileImage from "../../public/assets/profile-pic (9).png"

const ProfileCard = ({title}) => {
    return (
        <div className='border border-gray-200 p-4 rounded-lg bg-white'>
            <div className='flex items-center justify-between gap-5 '>
                {/* info */}
                <div>
                    <h4>Md sayem Mia</h4>
                    <p className='text-sm text-gray-500 mt-2'>Full stack developer</p>
                    <p className='text-sm text-gray-500'>Google</p>
                </div>
                {/* Image */}
                <Image
                    src={profileImage}
                    width={80}
                    height={80}
                    placeholder='blur'
                />
            </div>
            <button
                className='bg-purple-200 px-2 py-1 rounded-md text-sm mt-2'>
               {title}
            </button>
        </div>
    );
};

export default ProfileCard;