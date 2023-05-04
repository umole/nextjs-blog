import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(__dirname, 'content')

export function getPostData(fileName) {
    const filePath = path.join(postsDir, 'fileName')
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '' ); //removes the file extension at the end
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync();

    for (const postFile of postFiles) { 
        const postData = getPostData(postFile);
        
    }
}

export function getFeaturedPosts() {

}