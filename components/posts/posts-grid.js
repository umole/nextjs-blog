import React from 'react'
import PostItem from './post-item';

const Postgrid = (props) => {
  const { posts } = props;

  return <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
    {posts.map((post) => <PostItem />)}
  </ul>
}

export default Postgrid;