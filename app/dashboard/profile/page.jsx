import Image from 'next/image';
import React from 'react';
import avatar from "../../../public/assets/profile-pic (9).png"

const Profile = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-16'>
            <div className='bg-[#1E2875] mt-5 rounded-lg w-full  h-[139px]'>
                <h2 className='text-white uppercase'>My profile</h2>
            </div>
            {/* Profile information card */}
            <div className='grid grid-cols-2 bg-white w-11/12 mx-12 px-5 py-5'>
                <div className='w-full'>
                     {/* avatar  */}
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
                   {/* info part */}
                   <div
                    className='border border-gray-200 p-4 rounded-md mt-3 space-y-6'>
                    <div className='flex items-center
                 justify-between'>
                    <div>
                    <p className='text-sm'>your name</p>
                    <p>Md sayem Mia</p>
                    </div>
                    <button className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                        edit
                    </button>
                    </div>
                    <div className='flex items-center
                 justify-between'>
                    <div>
                    <p className='text-sm'>Email</p>
                    <p>mdsayemofficial1000@gmail.com</p>
                    </div>
                    <button className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                        edit
                    </button>
                    </div>
                    <div className='flex items-center
                 justify-between'>
                    <div>
                    <p className='text-sm'>Phone</p>
                    <p>01813636171</p>
                    </div>
                    <button className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                        edit
                    </button>
                    </div>
                    
                </div>
                {/* About part */}
                <div className='border border-gray-200 p-4 rounded-md mt-3'>
                  <h3 className='text-xl font-bold'>About <span className='text-purple-500 '>Sayem</span></h3>
                  <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repudiandae!</p>
                </div>
                {/* skill part */}
                <div className='border border-gray-200 p-4 rounded-md mt-3'>
               <div className='flex items-center justify-between'>
               <h4 className='text-lg font-bold mb-2'>Skills</h4>
               <button 
                 className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                 edit
                </button>
               </div>
               <div className='space-y-2'>
               <p className='text-sm'>Next js</p>
               <p className='text-sm'>Typescript</p>
               </div>
                </div>
                </div>
                
                <div>
                    education
                </div>
            </div>
        </div>
    );
};

export default Profile;