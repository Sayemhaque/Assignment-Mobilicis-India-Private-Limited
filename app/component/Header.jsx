import React from 'react';
import avatar from "../../public/assets/profile-pic (9).png"
import Image from 'next/image';
const Header = () => {
    return (
        <div className='flex gap-4 justify-end  items-center border-b border-gray-200 py-6 bg-white pr-12'>
            {/* bell icon */}
            <div>
                icons
            </div>
            {/* image */}
            <div>
            <Image
                src={avatar}
                width={50}
                height={50}
                alt="Picture of the author"
                placeholder='blur'
            />
            </div>
            {/* username */}
            <div>
              <small>Wellcome back</small>
              <p className='text-md font-bold'>Md Sayem</p>
            </div>
        </div>
    );
};

export default Header;