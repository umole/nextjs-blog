import React, { Fragment } from 'react'
import Hero from '../components/home/Hero';
import FeaturedPosts from '../components/home/FeaturedPosts';

const DUMMY_POSTS = [
  { 
    title: 'Getting started with Nextjs', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'This is a blog post to teach you on how to get started using the Nextjs framework.', 
    date: '2023-05-02', 
    slug: 'getting-started-with-nextjs' 
  },
  { 
    title: 'Getting started with Nextjs', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'This is a blog post to teach you on how to get started using the Nextjs framework.', 
    date: '2023-05-02', 
    slug: 'getting-started-with-nextjs2' 
  },
  { 
    title: 'Getting started with Nextjs', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'This is a blog post to teach you on how to get started using the Nextjs framework.', 
    date: '2023-05-02', 
    slug: 'getting-started-with-nextjs3' 
  },
  { 
    title: 'Getting started with Nextjs', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'This is a blog post to teach you on how to get started using the Nextjs framework.', 
    date: '2023-05-02', 
    slug: 'getting-started-with-nextjs4' 
  },
  { 
    title: 'Getting started with Nextjs', 
    image: 'getting-started-nextjs.png', 
    excerpt: 'This is a blog post to teach you on how to get started using the Nextjs framework.', 
    date: '2023-05-02', 
    slug: 'getting-started-with-nextjs5' 
  }
];

const HomePage = () => {
  return (
    // 1) Hero section => Present ourselves
    // 2) Featured AllPostspage
    <Fragment>
        <Hero />
        <FeaturedPosts posts={} />
    </Fragment>

  );
}

export default HomePage;