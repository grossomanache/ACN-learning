import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "../../styles/HitTemplate.module.css";

export const HitTemplate: FunctionComponent<any> = ({ hit }) => {
  const {
    title,
    status,
    rating,
    image,
    author: { name: authorName },
  } = hit;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{authorName}</h2>
      <p>Rating: {rating ? `${rating}/5` : "N/A"}</p>
      <Image
        src={`http:${image.file.url}`}
        alt={image.title}
        height={200}
        width={150}
      />
      <h2>Status: {status}</h2>
    </div>
  );
};
