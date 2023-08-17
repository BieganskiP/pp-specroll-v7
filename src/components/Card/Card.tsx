import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

interface CardProps {
  header: string;
  description: string;
  icon?: IconDefinition;
}

const Card: React.FC<CardProps> = ({ header, description, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center border h-fit md:h-52 border-additional rounded-lg w-full lg:w-1/3 m-4 p-2 shadow-lg hover:scale-105 bg-white transition-all">
      {icon && <FontAwesomeIcon className="w-20 mb-2" icon={icon} />}
      <h3 className="mb-2">{header}</h3>
      <p className="w-11/12">{description}</p>
    </div>
  );
};

export default Card;
