export const getHighlightedText = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part) =>
        part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
      )}
    </span>
  );
};

export const transformHighlightedText = (markdownText: string) => {
  const convertedText = markdownText
    .replace("<mark>", "<b>")
    .replace("</mark>", "</b>");
  return <>{convertedText}</>;
};
