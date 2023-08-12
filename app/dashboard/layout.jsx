import React from 'react';
import Sidebar from './Sidebar';
import Header from '../component/Header';

const DashboardLayout = ({children}) => {
    return (
        <div>
           <div className='grid grid-cols-5'>
            {/*sidebar  */}
        <div className='md:col-span-1'>
            <Sidebar/>
        </div>
            {/* Content */}
         <div className='col-span-5 md:col-span-4 bg-blue-100'>
           <Header/>
         {children}
         </div>
        </div>
        </div>
    );
};

export default DashboardLayout;