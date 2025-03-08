import React from "react";
import { Clipboard } from "@/app/assets";
import Image from "next/image";
type Props = {
  title: string;
};

function Index({ title }: Props) {
  return (
    <div className="bg-[#f5f5f5] p-6 rounded-md">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-semibold">{title ?? ""}</h3>
        <div className="flex items-center justify-center space-x-4">
          <p className="text-sm text-gray-600">Copy to clipboard!</p>
          <button className="btn btn-square">
            <Image src={Clipboard} alt="card_icon" width={22} height={22} />
          </button>
        </div>
      </div>
      <textarea
        className="h-[360px] lg:h-[400px] bg-white w-full rounded-md p-4 resize-none focus:outline-none focus:ring-0 border-1 border-gray-200 m-auto"
        placeholder="Enter your text here..."
      ></textarea>
    </div>
  );
}

export default Index;
