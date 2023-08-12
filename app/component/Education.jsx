import React from 'react';

const Education = () => {
    return (
        <div>
             <div className='flex items-center justify-between mt-5'>
                        <h4 className='font-bold'>Education</h4>
                        <button
                            className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                            edit
                        </button>
                    </div>
                    <div className='border border-gray-200 p-4 rounded-md mt-3'>
                        <h3 className='text-md font-bold'>
                            Professional Details
                        </h3>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repudiandae!</p>
                    </div>
        </div>
    );
};

export default Education;