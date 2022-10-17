import { NextComponentType } from "next";
import { extractFromLocale } from "../../lib/localization";

export const Hit: NextComponentType = ({ hit }: any) => {
  const {
    fields: { status, title, rating },
  } = hit;

  const language = "en-US";

  return (
    <>
      <h1>{extractFromLocale(title, language)}</h1>
      <h2>Status: {extractFromLocale(status, language)}</h2>
      <p>
        Rating: {rating ? `${extractFromLocale(rating, language)}/5` : "N/A"}
      </p>
    </>
  );
};
