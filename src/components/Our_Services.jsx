// Next
import Image from "next/image";
// Media
import img_1 from "media/services/1.png";
import img_2 from "media/services/2.png";
import img_3 from "media/services/3.png";
import img_4 from "media/services/4.png";
import img_5 from "media/services/5.png";
import img_6 from "media/services/6.png";

const data = [
  {
    text: "AI Chatbots",
    bg: img_1,
  },
  {
    text: "Mobile App Development",
    bg: img_2,
  },
  {
    text: "Video Animation",
    bg: img_3,
  },
  {
    text: "Cloud Computing",
    bg: img_4,
  },
  {
    text: "Digital Branding",
    bg: img_5,
  },
  {
    text: "Cybersecurity Solutions",
    bg: img_6,
  },
];

export default function Our_Services() {
  return (
    <section>
      <div className="py-[100px]">
        <div className="container">
          <div className="text-center max-w-[900px] mx-auto">
            <h1 className="xs:text-[26px] text-[35px] md:text-[45px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] font-bold xs:leading-snug leading-tight mb-3">
              Core <span className="text-primary">Services</span> We Provide
            </h1>
            <p>
              From our enterprise-grade custom software to our Generative Al-powered insights, find the answers to your business
              challenges and reinvent how your organization works with AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {data &&
              data.map((e) => (
                <div key={e.text}>
                  <div className="h-[300px] xl:h-[400px] relative z-[1] overflow-hidden rounded-md group">
                    <div className="absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Image src={e.bg} alt={e.text} fill className="object-cover z-[-1]" />
                    <h3 className="absolute inset-0 flex items-end bottom-5 justify-center text-[25px] md:text-[20px] xl:text-[25px] 2xl:text-[30px] text-white font-bold translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {e.text}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
