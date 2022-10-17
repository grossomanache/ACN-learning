import { forEach } from "lodash";
import { NextComponentType } from "next";
import { HitProps } from "../../interfaces/components";
import { extractFromLocale } from "../../lib/localization";

export const Hit = (props: HitProps): JSX.Element => {
  const language = "en-US";

  const {
    hit: {
      fields: { status, title, rating },
    },
  } = props;

  return (
    <>
      <h1>{title[language]}</h1>
      <h2>Status: {status[language]}</h2>
      <p>Rating: {rating ? `${rating[language]}/5` : "N/A"}</p>
    </>
  );
};
