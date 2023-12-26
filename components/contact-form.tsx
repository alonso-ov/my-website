"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters.",
    }),
    body: z.string().min(2, {
        message: "Message must be at least 2 characters.",
    }),
});

export default function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            body: "",
        },
    });

    const onSubmit = (data: { subject: string, body: string }) => {
        const subjectEndcoded = encodeURIComponent(data.subject);
        const bodyEncoded = encodeURIComponent(data.body);
        window.location.href = `mailto:aortiz.dev@outlook.com?subject=${subjectEndcoded}&body=${bodyEncoded}`;
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter inquiry here" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}

                />
                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter your message here" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="text-center"><Button type="submit">Submit</Button></div>
            </form>
        </Form>
    );

}