import React, { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { animated } from "react-spring";
import ProductCard from "../ui/ProductCard";
import { AllProducts } from "@/lib/types";

const VerticalCarousel = ({ items }: AllProducts) => {
  return (
    <Carousel
      orientation="vertical"
      className="w-full flex flex-col justify-center items-center"
    >
      <CarouselContent className="w-full h-[calc(100vh-60px)] pt-20">
        {items.map((item, index) => {
          const ref = useRef<HTMLDivElement>(null);
          const isIntersecting = useIntersectionObserver(ref, {
            root: null,
            rootMargin: "0px",
            threshold: 0.8,
          });

          return (
            <CarouselItem key={index} ref={ref} className="w-full basis-1/4">
              <animated.div
                style={{
                  transform: isIntersecting ? "scale(1)" : "scale(0.75)",
                  transition: "transform 0.3s",
                }}
              >
                <ProductCard
                  img={item.image}
                  title={item.name}
                  category={item.category}
                  price={item.price}
                  quantity={item.quantity}
                />
              </animated.div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default VerticalCarousel;
