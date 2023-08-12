import React from 'react';

const Experience = () => {
    return (
        <div>
            <div className='flex items-center justify-between mt-5'>
                <h4 className='font-bold'>Experience</h4>
                <button
                    className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                    edit
                </button>
            </div>
            <div className='border border-gray-200 
                p-4 rounded-md mt-3 text-center text-sm'>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>5years</p>
                    <p className='font-bold'>Full Time</p>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <p className='text-gray-400'>OruPhones</p>
                    <p className='text-gray-400'>Full Stack Developer</p>
                </div>
            </div>
            <div className='border border-gray-200 
                p-4 rounded-md mt-3 text-center text-sm'>
                <div className='flex items-center justify-between'>
                    <p className='font-bold'>5years</p>
                    <p className='font-bold'>Full Time</p>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <p className='text-gray-400'>OruPhones</p>
                    <p className='text-gray-400'>Full Stack Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;