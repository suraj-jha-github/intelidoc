'use client'
import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface IntegrationOption {
  type: string;
  description: string;
  icon?: string;
  iconVector?: string;
  iconGroup1?: string;
  color: string;
  gradient?: string;
  action: string;
  isPrimary: boolean;
}

interface IntegrationCardProps {
  option: IntegrationOption;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({ option }) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderIcon = () => {
    if (option.type === "Chrome extension") {
      return (
        <div className="w-13 h-16 md:w-16 md:h-20 relative max-w-full">
          <div className="relative w-[35px] h-[45px] md:w-[45px] md:h-[58px] top-[3px] left-2.5">
            <img
              className="absolute w-[20px] h-2 md:w-[25px] md:h-2.5 top-[25px] md:top-[35px] left-4 md:left-5 filter-blue"
              alt="Group"
              src="/features/group.png"
            />
            <img
              className="absolute w-2 h-2 md:w-2.5 md:h-2.5 top-0 left-[25px] md:left-[35px] filter-blue"
              alt="Group"
              src="/features/group-1.png"
            />
            <img
              className="absolute w-[35px] h-[45px] md:w-[45px] md:h-[58px] top-0 left-0 filter-blue"
              alt="Vector"
              src="/features/vector.svg"
            />
          </div>
        </div>
      );
    }

    return (
      <img
        className={`w-12 h-16 md:w-16 md:h-20 ${option.type === "Direct integration"
          ? "md:w-[88px] md:h-[110px]"
          : option.type === "Custom"
            ? "md:w-[70px] md:h-[85px]"
            : ""
          } filter-blue`}
        alt={option.type}
        src={option.icon}
      />
    );
  };

  return (
    <Card className="w-full max-w-[342px] min-h-[320px] bg-[#fff] rounded-[10px] border-[#c6c6c6] flex flex-col justify-between">
      <CardContent className="flex flex-col flex-1 p-0">
        <div className="flex-1 p-4 md:p-7 flex flex-col">
          {renderIcon()}
          <h3 className="font-playfair font-medium text-black text-xl md:text-2xl mt-4 md:mt-6">
            {option.type}
          </h3>
          <p className="font-gantari font-normal text-[#7b7979] text-base md:text-lg mt-3 md:mt-4 leading-relaxed">
            {option.description}
          </p>
        </div>
        <div className="mt-auto p-4 md:p-7 pt-0">
          {option.isPrimary ? (
            <Button
              className="w-full h-[34px] rounded-[5px] border-2 border-blue-800 text-blue-800 text-lg md:text-xl font-medium transition-colors bg-[#fff]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={isHovered ? { background: option.gradient, color: '#fff' } : {}}
            >
              {option.action}
            </Button>
          ) : (
            <Button
              variant="outline"
              className="w-full border-2 border-blue-800 h-[34px] text-[#162694] font-medium text-base md:text-lg  hover:bg-gray-100 transition-colors"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={isHovered ? { background: option.gradient, color: '#fff' } : {}}
            >
              {option.action}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};