import Image from "next/image";
import ProfessionalExperiences from "@/components/professional-experiences";

export default function AboutMe() {
  return (
    <main className="flex flex-col min-h-full p-4">

      <div className="flex flex-col my-12 sm:flex-row">
        <div className="flex flex-col items-center flex-grow-0 flex-shrink-0 ml-4">
          <Image
            src="/Alonso_Headshot.jpg"
            alt="Picture of the author"
            width={175}
            height={175}
            className="rounded-full"
          />
        </div>
        <p className="flex-grow p-4">
          Hello! My name is Alonso <span className="text-gray-400">(Al-ohn-soh)</span>. I am a software engineer
          and I am passionate about technology, design, and people. I am a creative problem solver and I love to learn.
          I am currently looking for opportunities to help me leverage my skills, knowledge, and creativity, and that can also
          provide me with opportunities to learn, grow, and help people. I am eager to apply my passion and enthusiasm to new
          challenges and environments.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center my-4 ">
        <h1 className="text-3xl font-bold text-center">Professional Experiences</h1>
        <ProfessionalExperiences />
      </div>
    </main>
  )
}