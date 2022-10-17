import { forEach } from "lodash";
import { NextComponentType } from "next";
import { extractFromLocale } from "../../lib/localization";

export const Hit: NextComponentType = ({ hit }: any) => {
  const language = "en-US";

  const {
    fields: { status, title, rating },
  } = hit;

  return (
    <>
      <h1>{title[language]}</h1>
      <h2>Status: {status[language]}</h2>
      <p>Rating: {rating ? `${rating[language]}/5` : "N/A"}</p>
    </>
  );
};
