import Image from "next/image";
import style from './index.module.css'

const Social = ({ text, image, url }) => {
    console.log(image)
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className={`${style.container} bg-gray-1 d-flex align-items-center px-2 m-0 border-radius mx-1`}
      style={{ fontSize: "1.4rem", height:"3.6rem" }}
    >
      { image && <Image className="m-0 p-0" src={image} width={20} height={20} />}
      <p className={`${ image && 'ml-2'} text-gray-2`}>{text}</p>
    </a>
  );
};

export default Social;
