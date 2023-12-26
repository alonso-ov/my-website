import ContactForm from "@/components/contact-form";
import { Linkedin, Github } from "lucide-react";
import Link from 'next/link';

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-between min-h-full p-4">
      <h1 className="py-8 text-4xl font-bold text-center">Feel free to Connect!</h1>
      <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8">
        <Link href="https://www.linkedin.com/in/alonso-ov/">
          <Linkedin size={42}/>
        </Link>
        <Link href="https://github.com/alonso-ov">
          <Github size={42}/>
        </Link>
      </div>
      <span className="border-b w-2/3 sm:w-1/3 my-12"></span>
      <h1 className="py-8 text-4xl font-bold text-center">Message Form</h1>
      <div>
        <ContactForm />
      </div>
    </main>
  )
}
