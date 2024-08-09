import React from "react";

interface ProductCardProps {
  img: string;
  title: string;
  category: string;
  price: number;
  quantity: number;
}

const ProductCard = ({
  img,
  title,
  category,
  price,
  quantity,
}: ProductCardProps) => {
  const glassCardStyle = "border-[8px] bg-glass border-glass";

  const adjustedPrice = () => {
    const adjustedPrice =
      (price * Math.log(quantity + 1)) / Math.log(price + quantity + 1);
    return adjustedPrice?.toFixed(2);
  };

  return (
    <div
      className={`w-[300px] md:w-[400px] h-[450px] px-[30px] shadow-lg rounded-3xl flex flex-col ${glassCardStyle} text-white text-opacity-70 hover:text-opacity-100 bg-opacity-75 backdrop-blur-lg user-select-none`}
    >
      <div className="flex justify-center text-3xl font-bold py-8">{title}</div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[150px] h-[150px] rounded-full border-2 border-gray-300 shadow-md">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="w-full px-4 pt-5">
          <div className="flex flex-row justify-between font-semibold text-md mb-2">
            <span>Category:</span>
            <span className="self-end">{category}</span>
          </div>
          <hr className="my-1" />
          <div className="my-3">
            <div className="flex flex-row justify-between font-semibold text-md ">
              <span>Price:</span>
              <span className="self-end">$ {price}</span>
            </div>
            <div className="flex flex-row justify-between font-semibold text-md">
              <span>Quantity:</span>
              <span className="self-end">{quantity}</span>
            </div>
          </div>
          <hr className="my-1" />
          <div className="flex flex-row justify-between font-semibold text-md mt-2">
            <span>Adjusted Price:</span>
            <span className="self-end">$ {adjustedPrice()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
