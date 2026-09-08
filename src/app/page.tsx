import { Hero } from "@/components/hero";
import {
  Areas,
  Featured,
  FieldExperience,
  Process,
  Closing,
} from "@/components/sections";
export default function Home() {
  return (
    <>
      <Hero />
      <Areas />
      <Featured />
      <FieldExperience />
      <Process />
      <Closing />
    </>
  );
}
