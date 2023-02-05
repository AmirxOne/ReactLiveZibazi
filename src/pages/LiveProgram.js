import React from 'react';
//components
import Header from '../components/Header';
import LiveSkyroom from '../components/liveProgram/LiveSkyroom';

const LiveProgram = () => {
    return (
        <div>
            <Header height={140}>
                      dvrverververv  
            </Header>

            <div className='w-full flex justify-center h-[min(87vh,43.5vw)]'>
                <div className='flex w-[min(100vw,220vh)]  h items-center justify-center'>
                    <div className='relative w-[min(77.75vh,39vw)] h-[min(82vh,41vw)] rounded-[4%] ml-[4%] flex flex-col justify-between'>
                        
                    </div>

                    <div className='w-[min(108vh,55vw)] h-[min(82vh,41vw)] bg-[#FEFCF2] p-[1%] rounded-[min(5vw,7.5vh)] shadow-2xl shadow-[#9F9170] border border-[#5A3F00] overflow-hidden hideScroll'>
                        <LiveSkyroom/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LiveProgram;