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
  wrapper_classes = "",
  embla_wrapper = "flex [margin-left:calc(1rem_*_-1)]",
  options,
  align = "start",
  children,
  arrows = true,
  dots = false,
  arrows_css = "",
  dots_css = "",
}) {
  const plugins = [ClassNames(), Autoplay({ delay: 5000, stopOnFocusIn: false, stopOnInteraction: false })];
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: align, loop: true, ...options }, plugins);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className={`overflow-hidden transition-all duration-300 ${wrapper_classes}`} ref={emblaRef}>
        <div className={embla_wrapper}>{children}</div>
      </div>
      {dots && (
        <div className={`${dots_css}`}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`text-[16px] font-medium bg-[#FFC5BE] rounded-full w-[35px] h-[35px] ${
                index === selectedIndex ? "!bg-primary text-white" : ""
              }`.concat(index === selectedIndex ? "" : "")}
              index={`0${index + 1}`}
            />
          ))}
        </div>
      )}
      {arrows && (
        <div className={`${arrows_css}`}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      )}
    </>
  );
}
