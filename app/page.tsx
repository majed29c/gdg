import Navbar from "@/components/Navbar";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import About from "@/components/About";
import { CodeBlockDemo } from "@/components/CodeBlockDemo";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <BackgroundLinesDemo/>
      <About/>
      <CardHoverEffectDemo/>
      <CodeBlockDemo/>
      <Footer/>
    </div>
  );
}
