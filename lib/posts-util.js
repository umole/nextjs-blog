// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const postsDir = path.join(__dirname, 'content')

// export function getPostData(fileName) {
//     const filePath = path.join(postsDir, 'fileName')
//     const fileContent = fs.readFileSync(filePath, 'utf-8')
//     const { data, content } = matter(fileContent);

//     const postSlug = fileName.replace(/\.md$/, '' ); //removes the file extension at the end
//     const postData = {
//         slug: postSlug,
//         ...data,
//         content,
//     };

//     return postData;
// }

// export function getAllPosts() {
//     const postFiles = fs.readdirSync();

//     for (const postFile of postFiles) { 
//         const postData = getPostData(postFile);

//     }
// }

// export function getFeaturedPosts() {

// }

import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
console.log(postsDirectory);
export function getPostsFiles() {
  //return fs.readdirSync(postsDirectory);
  return postsDirectory;
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}