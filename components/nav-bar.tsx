"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ThemeToggleButton } from '@/components/theme-toggle-button';
import {
    User,
    FileText,
    Lightbulb,
    AtSign
} from "lucide-react"
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();

    const titleMap: { [key: string]: string } = {
        "/": "About Me 👨‍💻",
        "/blog": "Blog 🚀",
        "/contact": "Contact 👋"
    }

    const title = titleMap[pathname];

    const links: { title: string; href: string; icon: any }[] = [
        {
            title: 'About Me',
            href: '/',
            icon: User
        },
        {
            title: 'Blog',
            href: '/blog',
            icon: FileText
        },
        {
            title: 'Contact',
            href: '/contact',
            icon: AtSign
        }
    ]

    return (
        <nav className="p-8 flex flex-col sm:flex-row w-full items-center justify-center space-y-5 sm:space-y-0 sm:space-x-5 border-b">
            <h1 className="font-bold text-5xl flex-1 text-center sm:text-left">{title}</h1>
            <ul className="flex-2 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3 text-lg">
                {links.map((link, index) => {
                    const LinkIcon = link.icon;
                    return (
                        <Link key={index} href={link.href} className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full space-x-2">
                                <LinkIcon />
                                <div>{link.title}</div>
                            </Button>
                        </Link>
                    );
                })}
            </ul>
            <div className="hidden sm:block">
                <ThemeToggleButton />
            </div>
        </nav>
    );
}