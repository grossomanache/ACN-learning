import Image from "next/image";
import { FunctionComponent } from "react";
import { Highlight } from "react-instantsearch-hooks-web";
import { convertHighlightedText } from "../../lib/helpers";
import {
  getHighlightedText,
  transformHighlightedText,
} from "../../lib/highlighter";
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
      <Highlight
        hit={hit}
        className={styles.bookName}
        attribute="title"
        highlightedTagName="b"
      />
      <Highlight
        hit={hit}
        className={styles.author}
        attribute="author.name"
        highlightedTagName="b"
      />
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
