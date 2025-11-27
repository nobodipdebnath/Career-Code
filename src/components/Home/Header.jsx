import React from "react";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <motion.div animate={{y:-100, transition:{duration: 2}
        }} className="max-w-md">
          <motion.h1 animate={{color: ['#82E44C', '#D04838', '#3882D0', '#C038D0', '#D03840'], transition: {duration: 4, repeat: Infinity}}} className="mb-5 text-5xl font-bold">Hello there</motion.h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
