// Components
import CTA from "@/components/CTA";
import Home_Hero_Video from "@/components/Home_Hero_Video";
// Next
import Image from "next/image";
// Media
import pattern from "media/pattern-1.png";

export default function Page() {
  return (
    <>
      <section>
        <div className="pt-[150px] pb-[100px] relative z-[1]">
          <Image
            src={pattern}
            alt="patern"
            fill
            priority
            className="absolute z-[-1] object-cover"
          />
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-x-5 items-center">
              <div>
                <div>
                  <h1 className="xs:text-[28px] text-[40px] md:text-[50px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-semibold xs:leading-snug leading-tight">
                    Connecting <span className="font-bold text-primary">BRANDS</span> With{" "}
                    <span className="font-bold text-primary">GLOBAL</span> Audiences
                  </h1>
                  <p className="my-5 lg:max-w-[530px] 2xl:max-w-full">
                    You have an idea, we have the talent and resources to turn it into a reality.
                    Quentis is a globally recognized digital agency elevating brands through
                    ground-breaking user experience and disruptive digital products.
                  </p>
                  <CTA />
                </div>
              </div>
              <div>
                <Home_Hero_Video />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
