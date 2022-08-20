import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const SocialLoader = () => {
    return (
        <div className='py-10 flex justify-center items-center'>
            <InfinitySpin color="royalblue" />
        </div>
    );
};

export default SocialLoader;