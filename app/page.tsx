import Intro from "./components/intro";
import SectionDevider from "./components/section-devider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4"> 
      <Intro/>
      <SectionDevider/>
    </main>
  )
}
