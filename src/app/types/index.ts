import { StaticImageData } from "next/image";
import React from "react";

export type CardData = {
  title: string;
  description: string;
  icon: StaticImageData;
};
