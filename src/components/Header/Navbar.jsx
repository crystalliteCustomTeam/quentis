// Shadcn
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  { text: "AI Chatbots", href: "/" },
  { text: "Mobile App Development", href: "/" },
  { text: "Video Animation", href: "/" },
  { text: "Cloud Computing", href: "/" },
  { text: "Digital Branding", href: "/" },
  { text: "Cybersecurity Solutions", href: "/" },
];

const Link = ({ text, href }) => {
  return (
    <NavigationMenuLink className="text-[16px]" href={href}>
      {text}
    </NavigationMenuLink>
  );
};

const SubLink = () => {
  const classes =
    "bg-white grid grid-cols-1 p-5 -ml-10 rounded-lg gap-5 top-full mt-2 z-50 absolute shadow-[0px_10px_10px_rgba(0,0,0,0.1)]";
  return (
    services && (
      <NavigationMenuItem>
        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
        <NavigationMenuContent className={classes}>
          {services.map(({ text, href }, i) => (
            <span key={i} className="flex items-center gap-2.5">
              <span className="inline-block w-3 h-3 rounded-full border-2 border-primary"></span>
              <Link text={text} href={href} />
            </span>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  );
};

export default function Navbar() {
  return (
    <NavigationMenu className="mx-auto text-[16px] 2xl:text-[18px]">
      <NavigationMenuList className="group flex flex-1 list-none items-center justify-center space-x-1 gap-5">
        <NavigationMenuItem>
          <Link text="Home" href="/" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link text="About" href="/about" />
        </NavigationMenuItem>
        <SubLink />
        <NavigationMenuItem>
          <Link text="Case Studies" href="/case-studies" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link text="Careers" href="/careers" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link text="Blog" href="/blog" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
