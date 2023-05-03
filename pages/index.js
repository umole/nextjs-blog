import React, { Fragment } from 'react'

const HomePage = () => {
  return (
    // 1) Hero section => Present ourselves
    // 2) Featured AllPostspage
    <Fragment>
        <Hero />
        <FeaturedPosts />
    </Fragment>

  );
}

export default HomePage;