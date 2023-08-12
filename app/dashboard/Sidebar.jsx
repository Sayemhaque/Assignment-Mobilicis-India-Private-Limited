import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='h-screen  text-center'>
           <button className='border border-gray-200 mt-5  px-5 py-2 bg-white'>
            Dashboard</button>
            {/* Links */}
           <nav className='mt-12 list-none flex flex-col items-center'>
            <div className='space-y-8'>
            <li><Link href="/dashboard/profile"
             className='border-2 border-blue-300 p-2 rounded-lg'>
                My Profile
            </Link></li>
            <li><Link href="/dashboard/connection" 
            className='border-2 border-blue-300 p-2 rounded-lg'>
                My Connections
            </Link></li> 
            </div>
            <div className='fixed bottom-6'>
            <button className=''>
            Logout
            </button>
            </div>
           </nav>
        </div>
    );
};

export default Sidebar;