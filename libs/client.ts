import { createClient } from "microcms-js-sdk";
import { APIKEY, SERVICE_DOMAIN, BLOGKEY, BLOG_DOMAIN } from "@/env";

export const client = createClient({
  serviceDomain: SERVICE_DOMAIN,
  apiKey: APIKEY,
});

export const blogClient = createClient({
  serviceDomain: BLOG_DOMAIN,
  apiKey: BLOGKEY,
});
