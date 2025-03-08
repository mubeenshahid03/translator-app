import React from "react";

type Props = {};

function Index({}: Props) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a
          className="text-2xl font-bold text-gray-900 dark:text-white"
          href="/"
        >
          GenZ Translator
        </a>
      </div>
    </header>
  );
}

export default Index;
