export const extractFromLocale = (
  object: { [key: string]: any },
  location: string
) => {
  return object[location];
};
