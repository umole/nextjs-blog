import React, { Fragment } from 'react'
import Hero from '../components/home/Hero';
import FeaturedPosts from '../components/home/FeaturedPosts';
import { getFeaturedPosts, getPostsFiles } from '../lib/posts-util';

const HomePage = (props) => {

  console.log(getPostsFiles());
  return (
    // 1) Hero section => Present ourselves
    // 2) Featured AllPostspage
    <Fragment>
        <Hero />
        <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}



export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 6000
  }
}

export default HomePage;