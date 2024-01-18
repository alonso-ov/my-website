import Link from "next/link";
import { PostMetadata } from "@/components/blog/PostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <Link  
      href={`/blog/${props.slug}`} 
      className="flex flex-col p-3 space-y-2 transition-colors bg-gray-200 bg-opacity-50 border border-transparent rounded-md min-w-32 sm:space-y-0 sm:space-x-8 sm:flex-row dark:bg-gray-800 hover:bg-transparent hover:border hover:border-gray-200 dark:hover:border-gray-700">
        <div className="flex flex-col flex-1 text-center sm:text-left sm:max-w-80">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{props.title}</div>
          <div className="text-md font-extralight">{props.date}</div>
        </div>
        <div className="text-sm text-center sm:text-left sm:w-64 flex-2">{props.description}</div>
    </Link>
  );
};