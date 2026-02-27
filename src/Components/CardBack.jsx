import React from "react";

const CardBack = ({ cardData }) => {
  return (
    <div className="bg-linear-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-2xl aspect-[1.586/1] overflow-hidden">
      {/* Mannetic Strip  */}
      <div className="bg-black h-14 w-full mt-8"></div>

      {/* CVC Pannel  */}
      <div className="px-8 mt-8">
        <div className="bg-gray-300 rounded-lg p-4 flex items-center justify-end shadow-inner">
          <span className="text-gray-800 font-mono text-2xl font-bold tracking-widest">
            {cardData.cvc || "000"}
          </span>
        </div>
      </div>

      {/* Footer Info  */}
      <div className="px-8 mt-6 flex justify-between items-end">
        <div className="text-gray-400 text-xs leading-relaxed">
          This card is property of the cardholder. <br />
          Misuse is a criminal offense.
          <br />
          <br />
          For customer service:
          <br />
          call 1-800-XXX-XXX
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center -space-x-2">
            <div className="w-9 h-9 bg-red-500 rounded-full"></div>
            <div className="w-9 h-9 bg-amber-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBack;
