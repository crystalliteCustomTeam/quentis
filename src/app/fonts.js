// Next
import { Poppins as fontSans } from "next/font/google";

const font_sans = fontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export { font_sans };
