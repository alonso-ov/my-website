import ContactForm from "@/components/root/contact-form";
import { Linkedin, Github } from "lucide-react";
import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <h1 className="py-8 text-4xl font-bold text-center">Feel free to Connect!</h1>
      <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row sm:space-x-8">
        <Link href="https://www.linkedin.com/in/alonso-ov/">
          <Linkedin size={42} color="#2563EB" />
        </Link>
        <Link href="https://github.com/alonso-ov">
          <Github size={42} color="#2563EB" />
        </Link>
      </div>
      <span className="w-2/3 my-12 border-b sm:w-1/3"></span>
      <h1 className="py-8 text-4xl font-bold text-center">Message Form</h1>
      <div>
        <ContactForm />
      </div>
    </>
  )
}
