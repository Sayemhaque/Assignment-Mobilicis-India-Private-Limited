import React from 'react';

const Skills = () => {
    return (
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
    );
};

export default Skills;