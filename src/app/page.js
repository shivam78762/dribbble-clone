import Image from "next/image";
import Hero from "./components/Hero";
import PromoBanner from "./components/PromoBanner";
import ExplorePage from "./components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <PromoBanner />
        <ExplorePage />
    </>
  );
}
