import React from 'react';

const ProfessionalDetails = () => {
    return (
        <div>
            <div className='border border-gray-200 p-4 rounded-md mt-3'>
                <h3 className='text-md font-bold'>
                    Professional Details
                </h3>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repudiandae!</p>
            </div>
            {/* certification */}
            <div className='flex items-center justify-between mt-5'>
                <h4 className='font-bold'>Certifications</h4>
                <button
                    className='bg-purple-200 px-2 py-1 rounded-full text-sm'>
                    edit
                </button>
            </div>
            <div className='border border-gray-200 
                p-4 rounded-md mt-3 text-center text-sm'>
                <p>Python</p>
                <p>Conding Ninja</p>
            </div>
        </div>
    );
};

export default ProfessionalDetails;