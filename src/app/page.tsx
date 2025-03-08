import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import CardList from "@/app/components/cardList";
import Footer from "@/app/components/footer";
import Translator from "@/app/components/translator";

export default function Home() {
  return (
    <span className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Translator />
      <CardList />
      <Footer />
    </span>
  );
}
