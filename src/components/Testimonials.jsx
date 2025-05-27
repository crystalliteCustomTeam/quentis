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
    para: "The team stood out because of their swift response time and patience. Quentis provided one contact person, which helped streamline project management and coordination. Not only did Quentis follow the budget and timeline, the team even offered additional services at no extra charge.",
    name: "Elijah James",
    jd: "Founder",
  },
  {
    para: "Willing to accommodate nonprofit budgets, Cubix brought their robust experience to the project. They checked in consistently, and were communicative, easy to reach, and responsive. The Android app shows over 500 downloads to date.",
    name: "Jack Agresti",
    jd: "CEO",
  },
  {
    para: "The team stood out because of their swift response time and patience. Quentis provided one contact person, which helped streamline project management and coordination. Not only did Quentis follow the budget and timeline, the team even offered additional services at no extra charge.",
    name: "Elijah James",
    jd: "Founder",
  },
  {
    para: "Willing to accommodate nonprofit budgets, Cubix brought their robust experience to the project. They checked in consistently, and were communicative, easy to reach, and responsive. The Android app shows over 500 downloads to date.",
    name: "Jack Agresti",
    jd: "CEO",
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
