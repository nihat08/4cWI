import React from "react";
import image from "../assets/JohnDoe.png";

type Props = {
  title: string;
  description: string;
};

export default function ImageCard({ title, description }: Props) {
  return (
    <div className="bg-white w-64">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-md"
      />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
