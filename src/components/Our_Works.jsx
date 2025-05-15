// Media
import one from "media/our_works/1.webp";
import two from "media/our_works/2.webp";
import three from "media/our_works/3.webp";
import four from "media/our_works/4.webp";
// Next
import Image from "next/image";
// Components
import Autoplay_Slider from "./Sliders/Autoplay_Slider";
import CTA from "./CTA";

const data = [
  {
    img: one,
    title: "Adidas",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: two,
    title: "IKEA",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: three,
    title: "Pizza",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: four,
    title: "KFC",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: one,
    title: "Adidas",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: two,
    title: "IKEA",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: three,
    title: "Pizza",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
  {
    img: four,
    title: "KFC",
    para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students.",
  },
];

export default function Our_Works() {
  return (
    <section>
      <div className="overflow-hidden py-[100px] relative z-[2] bg-gray-100">
        <div className="container">
          <div className="flex-col sm:flex-row gap-5 flex sm:items-center justify-between mb-10">
            <h1 className="text-[35px] md:text-[45px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-bold xs:leading-snug leading-tight">
              Our <span className="text-primary">Work</span>
            </h1>
            <CTA text="Explore All" />
          </div>
          <Autoplay_Slider
            embla_wrapper="flex [margin-left:calc(2rem_*_-1)]"
            wrapper_classes="overflow-visible"
            arrows_css="mt-10 flex gap-5"
            align="start">
            {data.map(({ img }, i) => (
              <div key={i} className="grow-0 shrink-0 basis-[300px] sm:basis-[400px] pl-8 group">
                <div className="h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] border-8 border-black/80">
                  <Image src={img} alt="Quentis" className="w-full h-full object-cover object-center" />
                </div>
              </div>
            ))}
          </Autoplay_Slider>
        </div>
      </div>
    </section>
  );
}
