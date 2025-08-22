"use client";
// Media
import logos from "media/testimonisla-logos.svg";
import pattern from "media/pattern-1.png";
// Next
import Image from "next/image";
// UI
import { CardStack } from "@/components/ui/card-stack";

const data = [
  {
    para: "Working with Quentis was a game-changer for our brand. They didn’t just build us a website—they helped us craft a digital identity that resonates with our audience. Their team was proactive, creative, and delivered exactly what we needed, on time and on budget.",
    name: "Sara Lin",
    jd: "-",
  },
  {
    para: "We hired Quentis to redesign our mobile app, and the result exceeded all expectations. From UX to visuals to performance, everything was on point. Their design team clearly understands how to blend aesthetics with usability.",
    name: "Jason Reid",
    jd: "-",
  },
  {
    para: "Quentis stood out for their communication and clarity. We always knew where we were in the project timeline, and they were quick to adjust based on our feedback. The final digital campaign drove record-breaking engagement.",
    name: "Monica Alvarez",
    jd: "-",
  },
  {
    para: "Their approach to digital strategy is smart and insightful. The AI chatbot they built for us reduced our customer service workload by 40% within the first month. Quentis delivers serious results.",
    name: "Elliot Price",
    jd: "-",
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="pt-[100px] pb-[190px]  relative z-[1]">
        <Image src={pattern} alt="patern" fill priority className="absolute z-[-1] object-cover" />
        <div className="container">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 className="text-[35px] md:text-[40px] lg:text-[45px] xl:text-[45px] 2xl:text-[50px] font-bold xs:leading-snug leading-tight mb-3">
              Our Clients Love <span className="text-primary">What We Do.</span>
            </h2>
            <p>We listen carefully to what our clients need and then use our creative skills to build great digital projects.</p>
          </div>
          <Image src={logos} alt="Quentis" className="mx-auto my-10" />
          <div className="max-w-[800px] mx-auto">
            <CardStack items={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
