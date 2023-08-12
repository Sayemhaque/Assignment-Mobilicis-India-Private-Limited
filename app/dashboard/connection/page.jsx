import MyConnections from '@/app/component/MyConnections';
import NewConnection from '@/app/component/NewConnection';
import React from 'react';

const Connection = () => {
    return (
        <div className='mx-5 md:mx-12'>
        <div className='bg-[#1E2875] mt-5 rounded-lg w-full  h-[139px]'>
            <h2 className='text-white uppercase p-2'>My Connections</h2>
        </div>
        <div className='py-12'>
            {/* My connections */}
        <MyConnections/>
        {/* People user can connect */}
        <h2 className='text-2xl font-bold py-8'>People you also can connect</h2>
        <NewConnection/>
        </div>
        </div>
    );
};

export default Connection;