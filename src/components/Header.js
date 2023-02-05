import React from 'react';

const Header = (props) => {

  let width = 2160;
  let height = props.height;
  const vh = `${"min(" + ((height / 1080) * 100).toFixed(1) + "vh," + (((((width / 2160) * 100).toFixed(1)) * height) / width).toFixed(1) + "vw)"}`;
  const vw = `${"min(" + ((width / 2160) * 100).toFixed(1) + "vw," + (((((height / 1080) * 100).toFixed(1)) * width) / height).toFixed(1) + "vh)"}`;

  return (
    <div style={{ height: `${vh}` }} className={`w-full relative flex items-center justify-center z-30 bg-black`}>
      <div style={{ minWidth: `${vw}` }} className={`h-full relative flex items-center justify-center bg-red-500`}>
        {props.children}
      </div>
    </div>
  );
};

export default Header;