import React from "react";
import Image from "next/image";
import { CardData } from "@/app/types";

function Index({ card }: { card: CardData }) {
  return (
    <div className="card shadow-lg p-6 rounded-lg bg-[#f5f5f5]">
      <div className="flex items-center space-x-4">
        <div className="bg-[#155dfc] p-3 rounded-xl">
          <Image src={card?.icon} alt="card_icon" width={30} height={30} />
        </div>
        <h3 className="text-xl font-semibold">{card?.title}</h3>
      </div>
      <p className="mt-4 text-gray-600">{card?.description}</p>
    </div>
  );
}

export default Index;
