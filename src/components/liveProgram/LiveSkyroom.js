import React,{ useEffect } from 'react'

function LiveSkyroom() {

    useEffect(() => {
        let iframe = document.getElementById("myFrame");
        let elmnt = iframe.contentWindow.document.getElementsByTagName("Header");
        console.log(elmnt)
        // elmnt.style.display = "none";
    },[])

  return (
    <div className='w-full h-full rounded-[min(5vw,7.5vh)] overflow-scroll hideScroll'>
        <iframe id="myFrame" className='w-[110%] h-[150%] relative -right-[5%] -top-[33%] overflow-scroll' src="https://www.skyroom.online/ch/saalanduser/zibazi-tv1/" width="100%" height="100%" frameborder="0" allowFullScreen="true" allow="autoplay;fullscreen;speaker;microphone;camera;display-capture">

        </iframe>
    </div>
  )
}

export default LiveSkyroom