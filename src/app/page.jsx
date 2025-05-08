// Components
import CTA from "@/components/CTA";
import Home_Hero_Video from "@/components/Home_Hero_Video";
// Next
import Image from "next/image";
// Media
import pattern from "media/pattern-1.png";
import q_1 from "media/q_1.png";

export default function Page() {
  return (
    <>
      <section>
        <div className="pt-[150px] pb-[100px] relative z-[1] text-black/80">
          <Image src={pattern} alt="patern" fill priority className="absolute z-[-1] object-cover" />
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-x-5 items-center">
              <div>
                <div>
                  <h1 className="xs:text-[28px] text-[40px] md:text-[50px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-semibold xs:leading-snug leading-tight">
                    Connecting <span className="font-bold text-primary">BRANDS</span> With{" "}
                    <span className="font-bold text-primary">GLOBAL</span> Audiences
                  </h1>
                  <p className="my-5 lg:max-w-[530px] 2xl:max-w-full">
                    You have an idea, we have the talent and resources to turn it into a reality. Quentis is a globally recognized
                    digital agency elevating brands through ground-breaking user experience and disruptive digital products.
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
      <section>
        <div className="py-[100px] lg:py-[150px] relative z-[1] bg-black/80 text-white/90">
          <Image src={pattern} alt="patern" fill priority className="absolute z-[-1] object-cover" />
          <div className="container">
            <div className="grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-x-10 items-center">
              <div className="relative">
                <Image src={q_1} alt="q_1" className="max-w-[80%] lg:max-w-[450px] ml-auto" />
                <h2 className="text-[50px] font-bold leading-tight absolute top-1/3 left-[50px] sm:left-[100px] after:content-[''] after:absolute after:w-[80px] after:h-[80px] after:bg-primary/50 after:left-[105px] after:z-[-1] after:top-[20px] hover:after:left-[200px] after:transition-all after:duration-300 hover:after:bg-primary">
                  About Us
                </h2>
              </div>
              <div>
                <h2 className="xs:text-[25px] text-[40px] md:text-[52px] lg:text-[32px] xl:text-[40px] 2xl:text-[46px] font-semibold xs:leading-snug leading-tight">
                  Empowering <span className="font-bold text-primary">Brands</span> Through{" "}
                  <span className="font-bold text-primary">Digital Innovation</span>
                </h2>
                <p className="mt-5 mb-5">
                  Quentis is a full-service software and digital marketing company committed to delivering innovative and
                  results-driven solutions for businesses of all sizes. With expertise spanning digital marketing, branding, SEO,
                  book design and publishing, and creative design services, we empower our clients to grow, connect, and thrive in
                  the digital space. At Quentis, we combine creativity with data-driven strategies to build lasting brand
                  experiences that drive measurable success.
                </p>
                <p className="mb-5">
                  Founded with a vision to be a one-stop hub for modern digital needs, Quentis has grown into a trusted partner
                  for businesses seeking cutting-edge technology and marketing support. Our team of skilled professionals brings
                  together technical knowledge and marketing insight to craft customized solutions that align with each client’s
                  goals. Whether it’s designing a compelling book cover, launching a digital campaign, or optimizing online
                  presence, Quentis is your go-to partner for turning ideas into impact.
                </p>
                <CTA />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
