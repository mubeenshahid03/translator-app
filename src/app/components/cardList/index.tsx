import React from "react";
import Card from "./card";
import { featureCardsData } from "@/app/constants";
type Props = {};

function Index({}: Props) {
  return (
    <div className=" mt-12 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-4 md:p-8 lg:p-12">
      {featureCardsData.map((item, idx) => (
        <Card key={idx} card={item} /> // Pass the card data to the Card component
      ))}
    </div>
  );
}

export default Index;
