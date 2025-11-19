import React from 'react';

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video 
        src="/videos/hero.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      ></video>

      <button>check it out </button>
    </section>
  );
};

export default Hero;

