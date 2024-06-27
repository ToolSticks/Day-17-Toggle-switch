'use client'


import { useState } from 'react';

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`relative inline-block w-24 h-8 align-middle select-none transition duration-200 ease-in ${
          isOn ? 'bg-green-400' : 'bg-gray-400'
        } rounded-full cursor-pointer`}
        onClick={toggle}
      >
        <div
          className={`absolute w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in ${
            isOn ? 'translate-x-16' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </div>
  );
}
