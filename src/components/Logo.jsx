import React from 'react';

function Logo({ width = '100px', className="" }) {
  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-full ${className}`}>
      <img
        width={width}
        alt="Logo"
        src="/images/logo.png"
        className="object-contain"
      />
    </div>
  );
}

export default Logo;
