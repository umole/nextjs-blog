import Postsgrid from "../posts/posts-grid";

function FeaturedPosts(props) {
    return <section className="">
        <h2>Featured Posts</h2>
        <Postsgrid posts={props.posts} />
    </section>
}

export default FeaturedPosts;