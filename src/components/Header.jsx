import React from 'react';

const Header = ({ category, title }) =>
{
    return (
        <div className='mb-10'>
            <p className='text-gray-400  dark:text-gray-400'> { category }
                <p className='font-extrabold tracking-tight text-3xl text-slate-900 dark:text-gray-200'> { title } </p>
            </p>
        </div>
    );
};

export default Header;