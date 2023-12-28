import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t flex flex-col items-center justify-center p-4 text-xs text-center leading-5">
            <p className="mb-2">Developed and maintained by <Link href="https://github.com/alonso-ov" className="underline">Alonso Ortiz</Link></p>
            <p className="mb-2 ">Created using <Link href="https://nextjs.org/" className="underline">Next.js</Link>, <Link href="https://tailwindcss.com/" className="underline">Tailwind</Link>, <Link href="https://ui.shadcn.com/" className="underline">shadcn/ui</Link>, and <Link href="https://lucide.dev/" className="underline">Lucide</Link></p>
            <p>Hosted on <Link href="https://vercel.com/" className="underline">Vercel</Link></p>
        </footer>
    );
}