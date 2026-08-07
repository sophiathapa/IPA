"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { BuyCard }from "./BuyCard";

export const beerStats = [
  {
    title: "ABV",
    fullForm: "Alcohol By Volume",
    value: "6.2%",
    detail: "Beer possesses moderate bitterness with a balanced malt profile and a medium-bodied mouthfeel.",
  },
  {
    title: "IBU",
    fullForm: "International Bitterness Units",
    value: "51.1",
    detail: "The bitterness is noticeable but balanced, providing a crisp hop character without overpowering the malt.",
  },
  {
    title: "OG",
    fullForm: "Original Gravity",
    value: "1.059",
    detail: "Original gravity indicates a medium-strength beer with enough fermentable sugars to produce a flavorful IPA.",
  },
];

export const Details = () => {
  const [buying, setBuying] = useState(false);

  const buyProduct = () => {
    setBuying(true);
  };

  const handleConfirmPurchase = (items: any[], total: number) => {
    console.log("Purchased:", items, "Total:", total);
    setBuying(false);
    // no backend — just close for now, or show a toast/confirmation
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-10 p-5">
      <div className="flex flex-col items-start justify-start gap-5 p-5">
        <span className="font-caveat text-xl md:text-3xl">Unlimited release</span>
        <h2>
          INIDA PALE
          <br />
          ALE
        </h2>
        <p>
            India Pale Ale is a style of beer defined by its strong hop content, significant bitterness, and higher alcohol content than classics. While lagers and weiss are all about balance, IPAs are all about hops. The name comes from the era of British colonialism, when in the 18th century beer
          was shipped from England to India with hops, which acted as a natural preservative on the long journey. True or false, the name stuck and the beer evolved.
        </p>
        <Button
          className="px-4 py-2 h-10 md:h-15 w-25 md:w-35 font-sm md:font-base"
          onClick={buyProduct}
        >
          Buy Now
        </Button>
      </div>
       <div className="grid md:col-start-3 flex flex-col items-start justify-center gap-5 border-2 p-10">
        {beerStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-start justify-center">
            <p>{stat.title}</p>
            <p>{stat.fullForm}</p>
            <div className="w-full h-1 bg-gray-500 mb-1"></div>
            <div className="flex items-end">
              <p className="w-24 text-2xl md:text-4xl font-anton">{stat.value}</p>
              <p className="flex-1">{stat.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <BuyCard open={buying} onClose={() => setBuying(false)} onConfirm={handleConfirmPurchase} />
    </div>
  );
};