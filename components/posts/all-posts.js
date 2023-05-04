import Postsgrid from "./posts-grid";

const AllPosts = (props) => {
  return (
   <section className="max-w-60rem w-90 mx-auto my-1">
        <h1 className="text-gray-800 text-center text-2xl sm:text-3xl md:4xl lg:text-6xl xl:text-10xl">All Posts</h1>
        <Postsgrid posts={props.posts} />
   </section>
  );
}

export default AllPosts;