import Image from "next/image";

const PostHeader = (props) => {
    const { title, image } = props;

  return (
    <header className="pb-8 border-b-8 border-primary-100 my-4 flex flex-col-reverse justify-between items-center gap-4">
        <h1 className="text-8xl text-primary-500 mb-0 leading-tight text-center md:text-left md:text-16">{title}</h1>
        <div className="w-200 h-120">
            <Image src={image} alt={title} width={200} height={150} class="w-full h-full object-cover" />
        </div>
    </header>
  );
}

export default PostHeader;