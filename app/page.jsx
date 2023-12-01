import CanalesCard from "@/Components/Canales";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-stone-950 ">
      <Hero />
      <CanalesCard />
    </main>
  );
}
