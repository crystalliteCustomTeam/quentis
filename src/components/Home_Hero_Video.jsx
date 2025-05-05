// Next
import Image from "next/image";
// Media
import logo from "media/home_hero_logo.svg";

export default function Home_Hero_Video() {
  return <Image src={logo} alt="Quentis" priority />;
}
