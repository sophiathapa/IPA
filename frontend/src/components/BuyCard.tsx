"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { X, Minus, Plus } from "lucide-react";

type Product = {
  id: number;
  name: string;
  subLabel: string;
  price: number;
  image: string;
};

const products: Product[] = [
  { id: 1, name: "On Tap", subLabel: "Per pint", price: 6.5, image: "/beer-tab.png" },
  { id: 2, name: "22 oz Bottle", subLabel: "6-Pack", price: 8.99, image: "/large-bottle.png" },
  { id: 3, name: "12 oz Bottle", subLabel: "6- or 12-Pack", price: 11.99, image: "/beer.png" },
  { id: 4, name: "12 oz Can", subLabel: "6-Pack", price: 10.99, image: "/small-can.png" },
  { id: 5, name: "19.2 oz Can", subLabel: "Single", price: 3.99, image: "/big-can.png" },
];

type BuyProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (items: { product: Product; quantity: number }[], total: number) => void;
};

export const BuyCard = ({ open, onClose, onConfirm }: BuyProps) => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  if (!open) return null;

  const updateQty = (id: number, delta: number) => {
    setQuantities((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  };

  const selectedItems = products
    .map((product) => ({ product, quantity: quantities[product.id] ?? 0 }))
    .filter((item) => item.quantity > 0);

  const total = selectedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleBuy = () => {
    if (selectedItems.length === 0) return;
    onConfirm(selectedItems, total);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full md:max-w-4xl max-h-[55vh] md:max-h-[85vh] flex flex-col shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold">Choose your pack</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product row - x scroll */}
        <div className="flex gap-4 overflow-x-auto p-6">
          {products.map((product) => {
            const qty = quantities[product.id] ?? 0;
            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-48 border rounded-xl p-4 flex flex-col items-center gap-3"
              >
                <img src={product.image} alt={product.name} className="h-32 w-auto object-contain" />
                <div className="text-center">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.subLabel}</p>
                  <p className="font-anton text-lg mt-1">${product.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <button
                    onClick={() => updateQty(product.id, -1)}
                    className="p-1 rounded-full border hover:bg-gray-100 disabled:opacity-30"
                    disabled={qty === 0}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-6 text-center">{qty}</span>
                  <button
                    onClick={() => updateQty(product.id, 1)}
                    className="p-1 rounded-full border hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t">
          <div>
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-anton">${total.toFixed(2)}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleBuy} disabled={selectedItems.length === 0}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};