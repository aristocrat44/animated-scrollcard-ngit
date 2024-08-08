import * as React from "react";
import { useRef } from "react";
import { animated } from "@react-spring/web";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ScrollCard from "./ScrollCard";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const AnimatedScrollCardCarousel = ({
  numberOfCards = 20,
}: {
  numberOfCards?: number;
}) => {
  const numToArrayGenerator = () => {
    return Array.from({ length: numberOfCards }, (_, index) => index + 1);
  };

  const items = numToArrayGenerator();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBCB73] via-[#DE2E7B] to-[#733EBB] pt-5 pb-5">
      <div className="h-[calc(100vh-40px)]">
        <Carousel
          orientation="vertical"
          className="w-full flex flex-col justify-center items-center"
        >
          <CarouselContent className="w-full h-[calc(100vh-100px)]">
            {items.map((index) => {
              const ref = useRef<HTMLDivElement>(null);
              const isIntersecting = useIntersectionObserver(ref, {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
              });

              return (
                <CarouselItem
                  key={index}
                  ref={ref}
                  className="w-full pt-20 basis-1/4"
                >
                  <animated.div
                    style={{
                      transform: isIntersecting ? "scale(1)" : "scale(0.75)",
                      transition: "transform 0.3s",
                    }}
                  >
                    <ScrollCard />
                  </animated.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default AnimatedScrollCardCarousel;
