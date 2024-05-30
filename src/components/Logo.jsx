import React from 'react';
import 'tailwindcss/tailwind.css';

function Logo({ width = '100px' }) {
  return (
    <div className="flex items-center justify-center overflow-hidden rounded-full ">
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
