import Image from "next/image";
import { FunctionComponent } from "react";

export const HitTemplate: FunctionComponent<any> = ({ hit }) => {
  const { title, status, rating, image } = hit;

  return (
    <>
      <h1>{title}</h1>
      <h2>Status: {status}</h2>
      <Image
        src={`http:${image.file.url}`}
        alt={image.title}
        width={100}
        height={100}
      />
      <p>Rating: {rating ? `${rating}/5` : "N/A"}</p>
    </>
  );
};
