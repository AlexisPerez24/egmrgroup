import Hero from "../components/Hero";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Reveal><Hero /></Reveal>
    </main>
  );
}
