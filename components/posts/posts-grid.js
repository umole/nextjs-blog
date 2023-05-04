import React from 'react'
import PostItem from './post-item';

const Postsgrid = (props) => {
  const { posts } = props;

  return <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
    {posts.map((post) => (
      <PostItem key={post.slug} post={post} />
      ))}
  </ul>
}

export default Postsgrid;