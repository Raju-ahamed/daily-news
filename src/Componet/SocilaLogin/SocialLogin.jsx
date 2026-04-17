import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from 'react-icons/io';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLogin = () => {
    return (

        <div>
            <div className='grid-cols-1 font-semibold mb-10'>
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
            <div className='grid-cols-1 font-semibold'>
                <h2 className='font-bold text-2xl mb-2'>Find Us On</h2>
                <div className='space-y-3'>
                    <button className='btn btn-info btn-outline w-full'>
                        <FaFacebook size={20} /> Log in with facebook
                    </button>
                    <button className='btn btn-primary btn-outline w-full'>
                        <FaXTwitter size={20} /> Log in with Tweeter
                    </button>
                    <button className='btn btn-secondary  btn-outline w-full'>
                        <FaInstagram size={20} />Log in with Instagram
                    </button>

                </div>
            </div>
        </div>
    );
};

export default SocialLogin;