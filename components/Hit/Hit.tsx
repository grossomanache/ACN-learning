import { NextComponentType } from "next";

export const Hit: NextComponentType = ({ hit }: any) => {
  const {
    fields: { status, title },
  } = hit;
  const language = "en-US";
  return (
    <>
      <h1>{title[language]}</h1>
      {/* <h2>{description[language]}</h2> */}
      {/* <p>{author[language]}</p> */}
      <h2>Status: {status[language]}</h2>
    </>
  );
};
