import Link from 'next/link';
import Image from 'next/image';

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${image}`
    const linkPath = `/posts/${slug}`;
    console.log(imagePath, linkPath, title, date);

  return <li className='shadow-md bg-gray-800 text-center' >
    <Link className='text-gray-100' href={linkPath}>
        <div className='w-full max-h-20rem overflow-hidden' >
            <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' className='object-cover' />
        </div>
        <div className='p-4'>
            <h3 className='m-2 text-6xl'>{title}</h3>
            <time className='italic text-gray-300'>{formattedDate}</time>
            <p className='leading-6'>{excerpt}</p>
        </div>
    </Link>
  </li>
}

export default PostItem;