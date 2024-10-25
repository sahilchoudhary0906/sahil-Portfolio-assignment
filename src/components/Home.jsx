import React from 'react';

const Home = () => {
  return (
    <div 
      className="relative flex flex-col justify-center h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('./sahil.jpg')" }} 
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50" />
      <div className="relative z-10 text-left p-4">
        <h1 className="text-8xl font-bold text-white animate-fadeIn md:text-6xl sm:text-5xl xs:text-4xl">Sahil</h1>
        <p className="mt-2 text-4xl text-white animate-slideUp delay-200 text-right md:text-3xl sm:text-2xl xs:text-xl">
          Front-End Developer
        </p>
      </div>
    </div>
  );
};

export default Home;
