import { siteConfig } from "@/lib/data/metadatas";

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
    }
}