import React, { useState, useEffect } from "react";
import ProductCard from "../ui/ProductCard";
import {
  adjustedPriceFunc,
  products,
  sortOptions,
  sortOrderOptions,
} from "@/lib/constants";
import VerticalCarousel from "./VerticalCarousel";
import { ProductProps } from "@/lib/types";
import SortNav from "./SortNav";

const AnimatedScrollCardCarousel = () => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    if (sortBy) {
      setSortOrder("asc");
    }
  }, [sortBy]);

  const sortedProducts = [...products].sort((a, b) => {
    const getAdjustedPrice = (item: ProductProps) =>
      adjustedPriceFunc(item.price, item.quantity);

    let comparison = 0;

    if (sortBy === "price") {
      comparison = a.price - b.price;
    } else if (sortBy === "adjustedPrice") {
      comparison = getAdjustedPrice(a) - getAdjustedPrice(b);
    } else if (sortBy === "quantity") {
      comparison = a.quantity - b.quantity;
    }

    return sortOrder === "desc" ? -comparison : comparison;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBCB73] via-[#DE2E7B] to-[#733EBB] flex flex-col">
      <SortNav
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div className="flex-1">
        <VerticalCarousel items={sortedProducts} />
      </div>
    </div>
  );
};

export default AnimatedScrollCardCarousel;
