import Image from 'next/image';

function Hero() {
    return <section className='text-center bg-gradient-to-b from-gray-900 to-gray-800 py-8'>
        <div className='w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 shadow-md rounded-full overflow-hidden bg-gray-700 m-auto'>
            <Image className='object-cover object-top w-full h-full' src='/images/site/photo.jpg' alt='Image showing andy' height={300} width={300}/>
        </div>
        <h1 className='text-2xl my-4 text-gray-300'>Hi, I'm Andy</h1>
        <p className='text-lg text-gray-200 w-90 max-w-2xl mx-auto'>I blog about web development especially full stack development using nextjs, tailwindcss, typescript </p>
    </section>
}

export default Hero;