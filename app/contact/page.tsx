import ContactForm from "@/components/contact-form";

export default function Blog() {
  return (
    <main className="flex flex-col items-center justify-between min-h-full p-4">
      <h1 className="py-8 text-4xl font-bold">Message Form</h1>
      <div>
        <ContactForm />
      </div>
    </main>
  )
}
