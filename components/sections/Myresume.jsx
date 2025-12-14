"use client";

import { memo } from "react";

const Myresume = () => {
  return (
    <section
      id="resume"
      className="py-10 w-full flex flex-col items-center border-b border-[#ffffff50] md:border-[#ffffff10] justify-center backdrop-blur-md text-white overflow-hidden"
    >
      <div className="relative text-center pb-12 max-w-2xl">
        {/* Background Title */}
        <h2 className="absolute inset-0 text-4xl sm:text-8xl font-extrabold text-gray-600/10 uppercase select-none flex items-center justify-center">
          resume
        </h2>

        {/* Foreground Title */}
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
          <code>~resume</code>
        </h3>

        {/* Dot Divider */}
        <div className="relative z-10 flex items-center justify-center mb-6">
          <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <div className="w-12 h-0.5 bg-purple-500 mx-2"></div>
        </div>

        <p className="text-gray-300 text-lg mb-8 px-10">
          Think of this as my changelog documenting all the bugs fixed &
          features shipped in my career.
        </p>

        <a
          href="https://drive.google.com/file/d/1sIrn49rdTA4xUtBcvtwU4EORh1cV6aK_/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn mx-auto"
        >
          <span className="relative z-10 hover:text-black">Download</span>
        </a>
      </div>
    </section>
  );
};

export default memo(Myresume);
