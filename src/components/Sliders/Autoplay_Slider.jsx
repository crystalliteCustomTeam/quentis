"use client";
// Embla
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./Slider_Arrows";
import { DotButton, useDotButton } from "./Slider_Dots";
// Css
import "./slider_dots.css";

export default function Autoplay_Slider({
  wrapperClasses = "",
  emblaWrapper = "flex [margin-left:calc(1rem_*_-1)]",
  options,
  align = "start",
  children,
  arrows = true,
  dots = true,
  arrowsCss = "",
  dotsCss = "",
}) {
  const plugins = [ClassNames(), Autoplay({ delay: 5000, stopOnFocusIn: false, stopOnInteraction: false })];
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: align, loop: true, ...options }, plugins);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className={`overflow-hidden transition-all duration-300 ${wrapperClasses}`} ref={emblaRef}>
        <div className={emblaWrapper}>{children}</div>
      </div>
      <div className={`flex gap-5 items-center justify-between ${arrows ? "mt-[50px]" : null}`}>
        {dots && (
          <div className={`flex gap-5 w-[calc(100%_-100px)] embla__dots ${dotsCss}`}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot bg-[#949494] h-1 block w-full".concat(
                  index === selectedIndex ? " embla__dot--selected" : "",
                )}
              />
            ))}
          </div>
        )}
        {arrows && (
          <div className={`flex gap-5 justify-end ${arrowsCss}`}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        )}
      </div>
    </>
  );
}
