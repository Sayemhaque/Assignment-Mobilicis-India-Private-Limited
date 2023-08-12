import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-5'>
            {/*sidebar  */}
        <div className='col-span-1'>
        </div>
            {/* Content */}
         <div className='col-span-4'>
         <h1 className='bg-red-100'>Content</h1>
         </div>
        </div>
    );
};

export default Dashboard;