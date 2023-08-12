import React from 'react';
import ProfileCard from './ProfileCard';

const NewConnection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
            <ProfileCard title={"connect"}/>
            <ProfileCard title={"connect"}/>
            <ProfileCard title={"connect"}/>
        </div>
    );
};

export default NewConnection;