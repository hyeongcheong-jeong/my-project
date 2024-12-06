import Image from "next/image";

interface propsType {
  imgSrc: string,
  width: number,
  height: number,
  alt: string,
}

export default function ImageCom({
  imgSrc,
  width,
  height,
  alt,
}: propsType) {
  return (
    <>
      <Image src={imgSrc} width={width} height={height} alt={alt} />
    </>
  )
}