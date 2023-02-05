import React from 'react';

const rotateGi = 'https://uploads.zibazi.tv/site/assets/images/icons/loading/rotate.webp';

const RotateMobail = () => {
    return (
        <div id='rotate' className='hidden absolute z-50 top-0 w-screen backdrop-filter backdrop-blur-3xl h-screen items-center justify-center flex-col'>
            {/* <video className='h-screen' autoPlay loop muted src={rotateGif}></video> */}
            <span className='text-[min(4vw,8vh)] mb-[20%] font-extrabold '>گوشی خود را بچرخانید</span>
            <img className='z-50 h-[20%]' src={rotateGi} alt="" />
        </div>
    );
};

export default RotateMobail;