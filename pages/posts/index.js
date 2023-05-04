import React from 'react'
import AllPosts from '../../components/posts/all-posts';

const AllPostspage = () => {

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

  return (
    <AllPosts posts={DUMMY_POSTS} />
  );
}

export default AllPostspage;