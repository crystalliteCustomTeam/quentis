"use client";
// Next
import Image from "next/image";
// React
import React, { useCallback, useEffect, useState } from "react";
// Media
import PrevArrow from "media/right_arrow.svg";
import NextArrow from "media/right_arrow.svg";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className="inline-flex items-center justify-center border-2 border-black/80 hover:border-primary rounded-full w-[40px] h-[40px] hover:bg-primary transition-all duration-300">
      <Image src={PrevArrow} alt="PrevArrow" className="rotate-180 brightness-0 invert-0" />
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      {...restProps}
      className="inline-flex items-center justify-center border-2 border-black/80 hover:border-primary rounded-full w-[40px] h-[40px] hover:bg-primary transition-all duration-300">
      <Image src={NextArrow} alt="NextArrow" className="brightness-0 invert-0" />
    </button>
  );
};
