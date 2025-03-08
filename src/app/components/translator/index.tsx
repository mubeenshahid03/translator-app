import React from "react";
import TextArea from "./textarea";
import Switch from "../ui/switch";
type Props = {};

function Index({}: Props) {
  return (
    <>
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 pb-16 md:pt-16 md:pb-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <TextArea title="GenZ" />
        <TextArea title="English" />
      </div>
      <div className="flex flex-col mx-auto space-y-6 items-center justify-center">
        <div className="flex items-center justify-center space-x-6">
          <p className="text-gray-600 font-semibold text-md">
            Translate GenZ language to English
          </p>
          <Switch />
        </div>
        <button className="btn bg-[#155dfc] text-white font-normal text-md w-[200px]">
          Translate
        </button>
      </div>
      <span className="mb-10" />
    </>
  );
}

export default Index;
