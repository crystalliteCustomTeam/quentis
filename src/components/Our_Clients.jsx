// Next
import Image from "next/image";
// Media
import six from "media/our_clients/6.png";
import seven from "media/our_clients/7.png";
import eight from "media/our_clients/8.png";
import nine from "media/our_clients/9.png";
import ten from "media/our_clients/10.png";
import eleven from "media/our_clients/11.png";
import twelve from "media/our_clients/12.png";
import thirteen from "media/our_clients/13.png";
import fourteen from "media/our_clients/14.png";
import fifteen from "media/our_clients/15.png";
import sixteen from "media/our_clients/16.png";
import seventeen from "media/our_clients/17.png";
import eighteen from "media/our_clients/18.png";
import nineteen from "media/our_clients/19.png";
import twenty from "media/our_clients/20.png";
import twentyone from "media/our_clients/21.png";
import twentytwo from "media/our_clients/22.png";
import twentythree from "media/our_clients/23.png";
import twentyfour from "media/our_clients/24.png";
import twentyfive from "media/our_clients/25.png";

const data = [six, seven, eight, nine, eleven, twelve, thirteen, fourteen, sixteen];

export default function Our_Clients() {
  return (
    <section>
      <div className="overflow-hidden py-[100px] relative z-[2] bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[40px] md:text-[60px] font-bold xs:leading-snug leading-tight mb-5">
                Our <span className="text-primary">Client’s</span>
              </h2>
              <h3 className="text-[20px] md:text-[30px] leading-snug font-semibold">
                Innovative Ideation, <br /> Design, and Execution In <br /> <span className="text-primary">One Place</span>.
              </h3>
            </div>
            <div>
              <div className="grid grid-cols-3 items-center">
                {data &&
                  data.map((e, i) => (
                    <div
                      key={i}
                      className="border-2 border-black/10 first:border-r-0 first:border-b-0 last:border-l-0 last:border-t-0 [&:nth-child(5)]:border-0 [&:nth-child(3)]:border-l-0 [&:nth-child(3)]:border-b-0 [&:nth-child(7)]:border-t-0 [&:nth-child(7)]:border-r-0">
                      <Image src={e} alt="Quentis" className="mx-auto" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
