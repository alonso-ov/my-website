import getPostMetadata from "@/components/blog/getPostMetadata";
import PostPreview from "@/components/blog/postPreview";

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 gap-4">{postPreviews}</div>
  );
}
