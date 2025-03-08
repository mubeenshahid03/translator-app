import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import CardList from "@/app/components/cardList";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <span className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <CardList />
      <Footer />
    </span>
  );
}
