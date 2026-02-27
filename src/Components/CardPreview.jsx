import React from "react";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const CardPreview = ({ cardData, flipped }) => {
  return (
    <div className="space-y-8">
      {/* Front  */}
      <div className="relative perspective-1000" style={{ minHeight: "280px" }}>
        <div
          className={`absolute inset-0 transition-all duration-700 ${flipped ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <CardFront cardData={cardData} />
        </div>

        {/* Back Card  */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${flipped ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          style={{
            transform: flipped ? "rotateY(0deg)" : "rotateY(-180deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <CardBack cardData={cardData} />
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
