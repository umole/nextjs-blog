import PostHeader from "./post-header";
import Markdown from "markdown-to-jsx";

const DUMMY_POST = { 
    title: 'Getting started with Nextjs', 
    image: 'getting-started-nextjs.png', 
    content: '# This is a blog post to teach you on how to get started using the Nextjs framework.', 
    date: '2023-05-02', 
    slug: 'getting-started-with-nextjs' 
  }

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.image}`;
    
  return (
   <article className="w-95 max-w-60rem mx-auto my-8 text-lg leading-10 bg-gray-100 rounded-md p-4">
    <PostHeader title={DUMMY_POST.title} image={imagePath} />
    <Markdown>{DUMMY_POST.content}</Markdown>
   </article>
  );
}

export default PostContent;