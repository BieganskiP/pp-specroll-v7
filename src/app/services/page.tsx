import React from "react";
import data from "@/staticData/productsData.json";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function page() {
  return (
    <div className="mx-auto px-4 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            productName={product.productName}
            description={product.description}
            url={product.url}
          />
        ))}
      </div>
    </div>
  );
}
