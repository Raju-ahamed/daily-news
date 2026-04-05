import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from 'react-icons/io';

const SocialLogin = () => {
    return (
        <div className='grid-cols-1 font-semibold'>
            <h2 className='font-bold text-2xl mb-2'>All Log in</h2>
            <div className='space-y-3'>
                <button className='btn btn-secondary btn-outline w-full'>
                    <FcGoogle size={24} /> Log in with Goggle
                </button>
                <button className='btn btn-primary btn-outline w-full'>
                    <IoLogoGithub size={24} /> Log in with Github
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;