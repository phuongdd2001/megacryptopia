import { Manrope, Outfit, Passion_One, Tinos } from "next/font/google";

export const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit-mono",
  subsets: ["latin"],
});

export const passion_one = Passion_One({
  weight: ["400", "700"],
  variable: "--font-passion-one-mono",
  subsets: ["latin"],
});

export const tinos = Tinos({
  weight: ["400", "700"],
  variable: "--font-tinos-mono",
  subsets: ["latin"],
});

export const manrope = Manrope({
  weight: ["400", "500","600", "700"],
  variable: "--font-manrope-mono",
  subsets: ["latin"],
});

