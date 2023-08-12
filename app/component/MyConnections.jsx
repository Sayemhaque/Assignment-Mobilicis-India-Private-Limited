import React from 'react';
import ProfileCard from './ProfileCard';

const MyConnections = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
            <ProfileCard title={"remove connection"}/>
            <ProfileCard title={"remove connection"}/>
            <ProfileCard title={"remove connection"}/>
            <ProfileCard title={"remove connection"}/>
            <ProfileCard title={"remove connection"}/>
            <ProfileCard title={"remove connection"}/>
        </div>
    );
};

export default MyConnections;