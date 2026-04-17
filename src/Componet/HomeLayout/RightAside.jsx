import React from 'react';
import SocialLogin from '../SocilaLogin/SocialLogin';
import qzone1 from '../../assets/playground.png';
import qzone2 from '../../assets/swimming.png';
import qzone3 from '../../assets/class.png';

const RightAside = () => {
    return (
        <div >
            <SocialLogin></SocialLogin>
            {/* q zoon */}
            <div className='bg-gray-100 mt-10 p-5'>
                <h1 className='font-bold'>Q-zone</h1>
                <div>
                    <img src={qzone1} alt="" srcset="" />
                </div>
                <div>
                    <img src={qzone2} alt="" srcset="" />
                </div>
                <div>
                    <img src={qzone3} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default RightAside;