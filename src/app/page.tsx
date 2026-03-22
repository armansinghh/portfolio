import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: {
    absolute: "Arman Singh",
  },
  description:
    "Frontend developer building modern web applications with a focus on performance, clean design, and usability.",
  alternates: {
    canonical: "/",
  },
};
  

export default function Page() {
  return <HomeContent />;
}