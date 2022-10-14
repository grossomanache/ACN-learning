declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SPACE_ID: string;
      NEXT_PUBLIC_DELIVERY_TOKEN: string;
      NEXT_PUBLIC_PREVIEW_TOKEN: string;
      NEXT_PUBLIC_ENVIRONMENT: string;
    }
  }
}

export {};
