import React from 'react';

const Contact = () => {
    return (
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
    );
};

export default Contact;