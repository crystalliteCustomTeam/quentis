"use client";
// Media
import one from "media/our_process/1.png";
import two from "media/our_process/2.png";
import three from "media/our_process/3.png";
import four from "media/our_process/4.png";
import five from "media/our_process/5.png";
import six from "media/our_process/6.png";
import icon_1 from "media/our_process/icon_1.png";
import icon_2 from "media/our_process/icon_2.png";
import icon_3 from "media/our_process/icon_3.png";
import icon_4 from "media/our_process/icon_4.png";
import icon_5 from "media/our_process/icon_5.png";
import icon_6 from "media/our_process/icon_6.png";
import pattern from "media/pattern-1.png";
// Next
import Image from "next/image";
// Components
import Autoplay_Slider from "./Sliders/Autoplay_Slider";
import CTA from "./CTA";

const data = [
  {
    title: "Ideate",
    para: "Signal is a next-gen communication app that prioritizes your privacy with end-to-end encryption. Experience seamless, secure messaging without compromising your data.",
    img: one,
    icon: icon_1,
    link: "javascript:;",
  },
  {
    title: "Design",
    para: "Product design merges form and function to create user-centered solutions. It focuses on crafting products that are not only aesthetically pleasing but also practical and intuitive to use.",
    img: two,
    icon: icon_2,
    link: "javascript:;",
  },
  {
    title: "Develop",
    para: "Develop involves creating and refining software solutions through coding, testing, and iteration. The process ensures that applications are functional, efficient, and meet user needs.",
    img: three,
    icon: icon_3,
    link: "javascript:;",
  },
  {
    title: "Test",
    para: "An educational test measures students' knowledge and skills in a specific subject area. It helps educators assess learning progress, identify areas for improvement, and guide instructional strategies.",
    img: four,
    icon: icon_4,
    link: "javascript:;",
  },
  {
    title: "Launch",
    para: "A software launch releases a new or updated application to users, involving extensive testing, marketing, and user support. It aims to deliver a seamless experience and introduce new.",
    img: five,
    icon: icon_5,
    link: "javascript:;",
  },
  {
    title: "Support",
    para: "Customer support provides assistance to users by resolving issues, answering questions, and offering guidance. It ensures a positive experience by addressing concerns promptly and effectively.",
    img: six,
    icon: icon_6,
    link: "javascript:;",
  },
];

export default function Our_Process() {
  return (
    <section>
      <div className="py-[100px]  relative z-[1] ">
        <Image src={pattern} alt="patern" fill priority className="absolute z-[-1] object-cover" />
        <div className="container">
          <h2 className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[45px] 2xl:text-[50px] font-bold xs:leading-snug leading-tight text-center max-w-[840px] mx-auto">
            Innovative Ideation, Design, and Execution In <span className="text-primary">One Place</span>.
          </h2>
          <div className="relative mt-10">
            <Autoplay_Slider
              wrapper_classes="relative before:content-[''] before:absolute before:top-0 before:left-[16px] before:bottom-0 before:w-[3px] before:h-ful before:bg-black/80 before:z-[-1]"
              embla_wrapper="flex [margin-left:calc(1rem_*_-1)] items-center"
              arrows={false}
              dots={true}
              dots_css="absolute top-0 bottom-0 flex flex-col justify-between z-[1]">
              {data.map(({ title, para, img, icon }, i) => (
                <div className="shrink-0 grow-0 basis-full pl-4" key={i}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 pl-[50px]">
                    <div>
                      <Image src={icon} alt="Quentis" />
                      <h3 className="text-[20px] sm:text-[30px] lg:text-[40px] xs:leading-snug leading-tight my-3 font-semibold">
                        {title}
                      </h3>
                      <p className="mb-3">{para}</p>
                      <CTA />
                    </div>
                    <div>
                      <Image src={img} alt="Quentis" className="mx-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </Autoplay_Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
