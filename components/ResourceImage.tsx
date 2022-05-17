import Image from 'next/image';
const imageResolver = ({ src }: {src: string}) => {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`;
}
function ResourceImage(props: { src?: string, className?: string, priority?: boolean }) {
  if (!props.src) {
    return null;
  }
  const src = imageResolver({ src: props.src });
  return (
    <div className="relative">
      <Image
        priority={props.priority || false}
        className="blur" 
        src={src} 
        alt="resource" 
        layout="fill" 
        objectFit="fill" 
        loader={imageResolver}
        unoptimized={true}
      ></Image>
      <Image 
        priority={props.priority || false}
        src={src}
        alt="resource"
        layout="fill"
        objectFit="contain"
        loader={imageResolver}
        unoptimized={true}
      ></Image>
    </div>
  )
}

export default ResourceImage;
