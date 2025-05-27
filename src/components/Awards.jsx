// Media
import one from "media/awards/1.webp";
import two from "media/awards/2.webp";
import three from "media/awards/3.webp";
import four from "media/awards/4.webp";
// Next
import Image from "next/image";
// Components
import Auto_Scroll from "./Sliders/Auto_Scroll";
// Media
import pattern from "media/pattern-1.png";

const data = [
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: one,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: two,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: three,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: four,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: one,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: two,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: three,
  },
  {
    text: "Recognized Among Top Animation Companies 2025",
    logo: four,
  },
];

export default function Awards() {
  return (
    <section>
      <div className="py-[100px] bg-black/80 text-white relative z-[1]">
        <Image src={pattern} alt="patern" fill priority className="absolute z-[-1] object-cover" />
        <div className="container">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[45px] xl:text-[45px] 2xl:text-[50px] font-bold xs:leading-snug leading-tight mb-3">
              We Transform Businesses Through <span className="text-primary">Creative Design.</span>
            </h2>
            <p>
              Quentis offers many design and development services. We help businesses grow by using new digital ideas that stand
              out and raise the bar for creativity.
            </p>
          </div>
        </div>
        <Auto_Scroll wrapperCss="mt-10">
          {data.map(({ text, logo }, i) => (
            <div key={i} className="grow-0 shrink-0 basis-auto pl-4">
              <div className="w-[300px] sm:w-[360px]  h-[200px] flex flex-col justify-center px-7 sm:px-14 border-2 border-primary rounded-md hover:bg-primary group">
                <Image src={logo} alt="Quentis" className="mb-5" />
                <p className="text-white/50 group-hover:text-white">{text}</p>
              </div>
            </div>
          ))}
        </Auto_Scroll>
      </div>
    </section>
  );
}
