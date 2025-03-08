"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

function Index({}: Props) {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="block mb-2"> GenZ Translator</span>
          {/* <span className="block text-blue-600 dark:text-blue-400">
            Powered by AI
          </span> */}
          <TypeAnimation
            sequence={["Powered by AI", 1000, "", 1000]}
            wrapper="span"
            speed={50}
            style={{ color: "#155dfc" }}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Create professional, context-aware content tailored to your needs
          using advanced language models and retrieval-augmented generation
          techniques.
        </p>
      </div>
    </div>
  );
}

export default Index;
