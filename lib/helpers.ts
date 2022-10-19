import * as contentful from "contentful";
import _, { replace } from "lodash";

const space_id = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const access_token = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
const preview_token = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT;

const getOptions = (is_preview: boolean) => {
  const options: contentful.CreateClientParams = {
    space: space_id,
    host: is_preview ? "preview.contentful.com" : undefined,
    accessToken: is_preview ? preview_token : access_token,
    environment: environment ?? "master",
    resolveLinks: true,
  };

  return options;
};

export const getAllLocales = async () => {
  const options = getOptions(false);
  const contentfulClient = contentful.createClient(options);
  try {
    let allLocales = await contentfulClient.getLocales();
    let dataType = _.get(allLocales, "sys.type");
    let items = _.get(allLocales, "items");
    if (dataType === "Array") {
      return items;
    } else {
      return false;
    }
  } catch (error) {
    console.log("getAllLocales error ", error);
  }
};

export const getEntriesByContentType = async (
  content_type: string,
  slug: string | null = null
) => {
  const options = getOptions(false);

  try {
    const contentfulClient = contentful.createClient(options);
    if (contentfulClient) {
      let params = { content_type, include: 3, fields: { slug: "" } }; //include -> to retrieve related data(linked entries) in same request, number of levels is 3

      if (slug) {
        params.fields.slug = slug;
      }
      console.log(params);

      let { items } = await contentfulClient.getEntries(params); // https://contentful.github.io/contentful.js/contentful/9.1.9/ContentfulClientAPI.html#.getEntries

      return { items };
    } else {
      return false;
    }
  } catch (error) {
    console.log("any errors? ->", error);
    return false;
  }
};

export const convertHighlightedText = (markdownText: string) => {
  return markdownText.replace("<mark>", "<b>").replace("</mark>", "</b>");
};
