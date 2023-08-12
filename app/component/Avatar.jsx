import React from 'react';
import avatar from "../../public/assets/profile-pic (9).png"
import Image from 'next/image';
const Avatar = () => {
    return (
        <div className='flex items-center justify-between gap-5'>
            <Image
                src={avatar}
                width={100}
                height={100}
                alt="Picture of the author"
                placeholder='blur'
            />
            <button
                className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                Update Profile</button>
        </div>
    );
};

export default Avatar;