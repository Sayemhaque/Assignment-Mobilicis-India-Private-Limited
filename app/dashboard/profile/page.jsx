import Image from 'next/image';
import React from 'react';
import Avatar from '@/app/component/Avatar';
import Contact from '@/app/component/Contact';
import About from '@/app/component/About';
import Skills from '@/app/component/Skills';
import ProfessionalDetails from '@/app/component/ProfessionalDetails';
import Experience from '@/app/component/Experience';
import Education from '@/app/component/Education';

const Profile = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-5 md:mx-12'>
            <div className='bg-[#1E2875] mt-5 rounded-lg w-full  h-[139px] '>
                <h2 className='text-white uppercase p-2'>My profile</h2>
            </div>
            {/* Profile information card */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 rounded-xl relative -top-12 bg-white w-11/12 mx-12 px-5 py-5'>
                <div className='w-full'>
                    {/* avatar  */}
                    <Avatar />
                    {/* info part */}
                    <Contact />
                    {/* About part */}
                    <About />
                    {/* skill part */}
                    <Skills />
                </div>
                {/* Professional details */}
                <div>
                    <ProfessionalDetails />
                    {/* Experience */}
                    <Experience />
                    {/* Education */}
                    <Education />
                </div>
            </div>
        </div>
    );
};

export default Profile;