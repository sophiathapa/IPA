import React from "react";

const Taste = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-15 p-5">
      <h1>MOUTH FEELS</h1>
      <div className="grid grid-cols-3 flex flex-col items-start justify-center gap-5 p-5">
        <div className="relative flex flex-col gap-5">
          <img src="/youtube.png" alt="youtube link" className="w-full h-auto" />
          <p className="font-caveat text-2xl">Hear it from our brewmonster Jeremy Marshall</p>
        </div>
        <div className="col-start-3 flex flex-col items-start justify-center gap-5">
          <p className="font-bold">
            A well-rounded, highly drinkable IPA packed with "C-word" hops and rounded out with some simcoe. The taste is a clean mix of refreshing citrus, sweet caramel and pleasant bitterness. Lagunitas IPA has a light orange body, a long lasting head, a full bodied aroma, and a nice sharp hop
            finish. Pairs with mild blue cheese, heavy metal and bluegrass.
          </p>
          <p className="font-anton text-3xl">STYLE</p>
          <p>
            In the world of India Pale Ale, our darling is a bit of a rare gem. We've been called easy (to drink). We've been called high (ly drinkable). But don't let the names others call us limit your perception, man. We proudly brew Lagunitas IPA year round as a friendly, well balanced beer
            that's great for IPA beginners and lifelong IPA lovers. A well-rounded, highly drinkable IPA with more personality than a monk on acid. This is an India Pale Ale that craft beer newbies and lifelong IPA fans both love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Taste;
