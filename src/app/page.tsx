import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Health from "@/components/Health";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Videos />
        <Health />
        <Community />
      </main>
      <Footer />
    </>
  );
}
