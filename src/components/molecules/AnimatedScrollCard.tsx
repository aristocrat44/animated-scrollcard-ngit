import React, { useEffect } from "react";
import ScrollCard from "../ui/ScrollCard";

const AnimatedScrollCard = ({
  numberOfCards = 20,
}: {
  numberOfCards?: number;
}) => {
  const numToArrayGenerator = () => {
    return Array.from({ length: numberOfCards }, (_, index) => index + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll<HTMLElement>(".scroll-card");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + window.scrollY + cardRect.height / 2;
        const distance = Math.abs(scrollPosition - cardCenter);
        const scale = Math.max(1, 1.2 - distance / 500);

        (card as HTMLElement).style.transform = `scale(${scale})`;
        (card as HTMLElement).style.transition = "none";
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-[#FBCB73] via-[#DE2E7B] to-[#733EBB] bg-fixed bg-cover z-[-1]" />
      <div className="w-full relative flex flex-col items-center justify-center  min-h-screen py-12 overflow-y-scroll">
        {numToArrayGenerator().map((each) => (
          <div key={each} className="my-8 md:my-15 scroll-card">
            <ScrollCard />
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedScrollCard;
