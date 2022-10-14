declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTENTFUL_SPACE_ID: string;
      NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN: string;
      NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN: string;
      NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT: string;
      NEXT_PUBLIC_ALGOLIA_APPLICATION_ID: string;
      NEXT_PUBLIC_ALGOLIA_ADMIN_KEY: string;
      NEXT_PUBLIC_ALGOLIA_INDEX_NAME: string;
    }
  }
}

export {};
