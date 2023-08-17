import React from "react";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  productName: string;
  description: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  productName,
  description,
  url,
}) => {
  return (
    <div className="rounded-md shadow-md w-full overflow-hidden">
      <Image src={url} alt={productName} width={500} height={500} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{productName}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
