import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";
import getPostMetadata from "@/components/blog/getPostMetadata";

function getPostContent(slug: string) {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export async function generateStaticParams() {
    const posts = getPostMetadata();
    return posts.map((post: any) => ({
        slug: post.slug,
    }));
};

export default function BlogPost(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    
    return (
        <div className="w-5/6 sm:w-auto">
            <div className="pb-6 mt-8 mb-6 text-center border-b">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{post.data.title}</h1>
                <p className="mt-2">{post.data.date}</p>
            </div>

            <article className="mb-8 prose dark:prose-invert text">
                    <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};